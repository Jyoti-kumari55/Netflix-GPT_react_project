import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
    
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);


    const email = useRef(null);
    const password = useRef(null);

    const buttonClickHandler = () => {
      console.log(email.current.value);
      console.log(password.current.value);

      const message = checkValidData(email.current.value, password.current.value)
      setErrorMessage(message);

    };

    const toggleToSignInForm = () => {
    setIsSignInForm(!isSignInForm);
     };

  return (
    <div>
      <Header />
      <div className='absolute'>

      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
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

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

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
