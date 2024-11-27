import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    function toggleSignInForm() {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />

            {/* BackGround Image Section */}
            <img className='absolute'
                src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_medium.jpg" alt="BackGround Image" />

            {/* Sign In Section :- Email, Password and Sign In Button */}
            <form action="" className='w-1/3 p-12 absolute bg-black text-white my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>

                <h1 className="font-bold text-3xl m-2 py-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&
                    <input type="text" placeholder='Full Name' className="px-4 py-[15px] m-2 my-[12px] w-full rounded-md bg-black bg-opacity-40 border-2 border-gray-600  focus:border-gray-400 focus:ring-gray-300 focus:ring-2" />
                }
                <input type="text" placeholder='Email or mobile number' className="px-4 py-[15px] m-2 my-[12px] w-full rounded-md bg-black bg-opacity-40 border-2 border-gray-600  focus:border-gray-400 focus:ring-gray-300 focus:ring-2" />
                <input type="password" placeholder='Password' className="px-4 py-[15px] m-2 my-[12px] w-full rounded-md bg-black bg-opacity-40 border-2 border-gray-600  focus:border-gray-400 focus:ring-gray-300 focus:ring-2" />
                <button className='p-3 py-[13px] m-2 my-[18px] w-full bg-[rgb(229,9,20)] rounded-md font-medium'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                {/* Sign In Section:- Check New User  */}
                <p className="p-3 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? (
                        <>New to Netflix? <strong className="font-bold hover:underline">Sign Up now.</strong></>
                    ) : (
                        <>Already registered? <strong className="font-bold hover:underline">Sign In now.</strong></>
                    )}
                </p>

            </form>

        </div>
    )
}

export default Login