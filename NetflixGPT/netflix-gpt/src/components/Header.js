import React, { useEffect } from 'react';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");

      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL
          })
        );
           navigate("/browse");  
      } else {
        dispatch(removeUser());
        navigate("/");        
      }
    });
    return () => unsubscribe();

  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    //console.log(e.target.value)   
    dispatch(changeLanguage(e.target.value))
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44' src={LOGO} alt='logo' 
       />

      {user && (
        <div className='flex p-2 '>
          {showGptSearch && (
            <select className='p-2 m-2 bg-gray-700 text-white rounded-lg'
              onClick={handleLanguageChange}>
              {SUPPORTED_LANG.map((language) => (
                <option key={language.identifier}
                      value={language.identifier}>
                      {language.name}
                  </option>
                ))}
            </select>
          )}
        <button className='py-2 px-4 mx-3 my-2 bg-lime-600 text-white rounded-lg'
          onClick={handleGptSearchClick}> 
          {showGptSearch ? "Homepage" : "GPT Search" }
        </button>
        <img className='w-12 h-12' alt='userIcon' src={user?.photoURL} />

      <button
          onClick={handleSignOut}
          className='font-bold text-white'
         >Sign out
      </button>
    </div>
   )}
      
  </div>
  )
};

export default Header
