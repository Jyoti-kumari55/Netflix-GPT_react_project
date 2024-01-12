import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, User_Avatar } from '../utils/constants';
		
const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();

	const email = useRef(null);
	const password = useRef(null);
	const name = useRef(null);

	const buttonClickHandler = () => {
		const message = checkValidData( email.current.value, password.current.value);
			setErrorMessage(message);

	    if (message) return;
	
	//logic for sign in & Sign up form

if(!isSignInForm){

	createUserWithEmailAndPassword(
		auth, 
		email.current.value, 
		password.current.value
		)
         .then((userCredential) => {

		// Signed up 

		const user = userCredential.user;
		  updateProfile(user, {
			displayName: name.current.value, 
			photoURL: User_Avatar,
			})
			.then(() => {
			    const {uid, email, displayName, photoURL} = auth.currentUser;
				    dispatch(
					  addUser({
						uid: uid, 
						email: email, 
						displayName: displayName, 
						photoURL: photoURL
					    })
				    );  			
			    })
			     .catch((error) => {
				  setErrorMessage(error.message);
			    });
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			setErrorMessage(errorCode + "---" + errorMessage);              
		});
	} 
	else 
	{
		// Signed in logic
		signInWithEmailAndPassword(
			auth, 
			email.current.value, 
			password.current.value
			)
		     .then((userCredential) => {
				const user = userCredential.user;		
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			setErrorMessage(errorCode + " --- " + errorMessage);
		});
	}
};

const toggleToSignInForm = () => {
	setIsSignInForm(!isSignInForm);
};
    
return (
	<div>
	  <Header />
		<div className='absolute'>
			<img 
				src={BG_URL} 
				alt='logo' />
		</div>

		<form 
			onSubmit={(e) => e.preventDefault()}
			className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

		<h1 
			className='font-bold text-3xl py-4 '>
			{isSignInForm ? "Sign In" : "Sign Up"}
		</h1>

		{!isSignInForm && (
		  <input 
			ref={name}
			type='text'
			placeholder='Your Full Name'
			className='p-4 my-2 w-full bg-zinc-700 rounded-lg'
		  />
		)}

		<input 
			ref={email}
			type='text' 
			placeholder='Put your email address'
			className='p-4 my-2 w-full bg-zinc-700 rounded-lg'
		/>

		<input 
			ref={password}
			type='password' 
			placeholder='Password' 
			className='p-4 my-2 w-full bg-zinc-700 rounded-lg'
		/>

		<p className='text-red-500 font-bold text-lg py-2'>
		{errorMessage}
		</p>

		<button 
			className='p-3 my-5 bg-red-600 w-full rounded-lg'
			onClick={buttonClickHandler}>
			{isSignInForm ? "Sign In" : "Sign Up"}
        </button>

		<p 
			className='py-4'
			onClick={toggleToSignInForm}>
		{
			isSignInForm ? 
			"New to Netflix? Sign up now.": 
			"Already registered? Sign in now."
		}
		</p>
    </form>
</div>
	)
}

export default Login;
