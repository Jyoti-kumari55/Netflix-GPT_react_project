import React, { useState } from 'react'
import Header from './Header'
    
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

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
            type='text' 
            placeholder='Put your email address'
            className='p-4 my-2 w-full bg-zinc-700 rounded-lg'
            
         />

        <input 
            type='password' 
            placeholder='Password' 
            className='p-4 my-2 w-full bg-zinc-700 rounded-lg'
        />

        <button 
            className='p-3 my-5 bg-red-600 w-full rounded-lg'>
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
