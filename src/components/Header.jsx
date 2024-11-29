import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/Firebase';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {

    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });

  }

  return (
    <div className='absolute px-20 py-2 bg-gradient-to-b from-black to-black-600 w-full z-10 flex justify-between'>
      <img
        className='w-44'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && <div className='flex p-7'>
        <img
          className='w-10 h-10 mx-3 rounded-3xl'
          src={user?.photoURL || "https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"}
          alt={user?.displayName || "User Avatar"}
        />
        <button className='text-white font-medium' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header