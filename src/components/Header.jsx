import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../app/UserSlice';
import { LOGO, Supported_languages } from '../Utils/Constants';
import { addToggleGptSearchView } from '../app/GPTSlice';
import { changeLanguage } from '../app/ConfigSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const handleSignOut = () => {

    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser(
          { uid: uid, email: email, displayName: displayName, photoURL: photoURL }
        ));
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const toggleGPTSearchClick = () => {
    dispatch(addToggleGptSearchView());
  }

  const handleLangaugeChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute px-6 md:px-20 py-2 bg-gradient-to-b from-black to-black-600 w-full z-10 flex flex-col md:flex-row justify-between items-center'>
      {/* Logo Section */}
      <img
        className='w-28 sm:w-36 md:w-48 mb-4 md:mb-0'
        src={LOGO}
        alt="NetflixGpt logo"
      />

      {/* User Actions */}
      {
        user &&
        <div className='flex flex-row sm:flex-row items-center p-3 md:p-7'>

          {/* Language Select */}
          {
            showGptSearch &&
            <select
              className='p-2 bg-slate-300 mr-0 sm:mr-3 mb-3 sm:mb-0 rounded-lg text-black'
              onChange={handleLangaugeChange}
            >
              {Supported_languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          }

          {/* GPT Search Button */}
          <button
            className='bg-purple-900 text-white rounded-lg px-4 py-2 mx-2 mb-3 sm:mb-0 hover:bg-purple-950'
            onClick={toggleGPTSearchClick}
          >
            {showGptSearch ? "Home Page" : "🔍 GPT Search"}
          </button>

          {/* User Avatar */}
          <img
            className='w-10 h-10 mx-3 mb-3 sm:mb-0 rounded-full'
            src={user?.photoURL || "https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"}
            alt={user?.displayName || "User Avatar"}
          />

          {/* Sign Out Button */}
          <button
            className='text-white font-medium hover:text-red-400 -mx-2 md:m-0'
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      }
    </div>

  )
}

export default Header