import React, { useRef, useState } from 'react'
import Header from './Header'
import CheckValidData from '../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../app/UserSlice';
import { Netflix_Background_Img, photoURL } from '../Utils/Constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    function handlebuttonclick() {
        // validate the form data

        const message = CheckValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log(user);

                    updateProfile(user,
                        {
                            displayName: name.current.value,
                            photoURL: photoURL,
                        }).then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL,
                            }));
                            navigate('/browse')
                        }).catch((error) => {
                            setErrorMessage(error.message)
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
        else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code; // This gives you the error code, like 'auth/user-not-found'
                    const errorMessage = error.message; // The full error message from Firebase

                    if (errorCode === "auth/user-not-found") {
                        setErrorMessage("User not found in database");
                    } else if (errorCode === "auth/invalid-credential") {
                        setErrorMessage(" credentials, please check your email and password.");
                    } else {
                        // You can set a generic error message for other cases
                        setErrorMessage(errorMessage);
                    }
                });
        }
    }

    function toggleSignInForm() {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />

            {/* BackGround Image Section */}
            <img className='fixed top-0 left-0 w-full h-full object-cover'
                src={Netflix_Background_Img}
                alt="BackGround Image"
            />

            {/* Sign In Section: Email, Password, and Sign In Button */}
            {/* <form onSubmit={(e) => e.preventDefault()}
                className='w-1/3 p-12 absolute bg-black text-white my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80'
            > */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className='w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 sm:p-10 md:p-12 absolute bg-black text-white my-16 sm:my-24 md:my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80'
            >


                <h1 className="font-bold text-3xl m-2 py-3">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {/* Show Full Name input only for Sign Up */}
                {!isSignInForm &&
                    <input type="text"
                        ref={name}
                        placeholder='Full Name'
                        className="px-4 py-[15px] m-2 my-[12px] w-full rounded-md bg-black bg-opacity-40 border-2 border-gray-600  focus:border-gray-400 focus:ring-gray-300 focus:ring-2"
                    />
                }

                {/* Email input */}
                <input type="text"
                    ref={email}
                    placeholder='Email or mobile number'
                    className="px-4 py-[15px] m-2 my-[12px] w-full rounded-md bg-black bg-opacity-40 border-2 border-gray-600  focus:border-gray-400 focus:ring-gray-300 focus:ring-2"
                />

                {/* Password input */}
                <input type="password"
                    ref={password}
                    placeholder='Password'
                    className="px-4 py-[15px] m-2 my-[12px] w-full rounded-md bg-black bg-opacity-40 border-2 border-gray-600  focus:border-gray-400 focus:ring-gray-300 focus:ring-2"
                />

                {/* Error message */}
                {
                    errorMessage
                    &&
                    <p className='text-red-600 mx-2 font-normal'>{"Incorrect " + errorMessage}</p>
                }

                {/* Submit Button */}
                <button
                    className="p-3 py-[13px] m-2 my-[18px] w-full bg-[rgb(229,9,20)] rounded-md font-medium transition-colors duration-200 ease-in-out 
                            hover:bg-[rgb(200,0,6)] active:bg-[rgb(180,0,1)] focus:outline-none"
                    onClick={handlebuttonclick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>


                {/* Sign In/Sign Up Toggle */}
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