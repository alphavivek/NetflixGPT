import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../app/UserSlice';
import { LOGO } from '../Utils/Constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

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

  return (
    <div className='absolute px-20 py-2 bg-gradient-to-b from-black to-black-600 w-full z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO}
        alt="NetflixGpt logo"
      />

      {
        user
        &&
        <div className='flex p-7'>
          <img
            className='w-10 h-10 mx-3 rounded-3xl'
            src={user?.photoURL || "https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"}
            alt={user?.displayName || "User Avatar"}
          />
          <button className='text-white font-medium' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header