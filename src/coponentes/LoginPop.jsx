import React, { useState } from 'react'
import { assets } from '../assets/assets'

function LoginPop({ setShowLogin }) {

    const [currState, setCurrState] = useState("Log In")
    return (
        <div className='login-pop'>

            <form className='login-popup-container'>

                <div className='login-popup-title'>

                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />

                </div>

                <div className='login-popup-input'>

                    {currState === "Log In" ? <></> : <input type="text" placeholder='Enter your name' />}

                    <input type="email" placeholder='E-mail' />
                    <input type="password" placeholder='password' />


                    <button>{currState === "Sign Up" ? "Create Account" : "Log In"}</button>

                    <div className='login-popup-condition'>

                        <input type='checkbox' />
                        <p>By continuing, i agree to the terms of use & Privacy Policy</p>

                    </div>

                    {currState === "Log In" ? <p>create a new account?<span onClick={() => setCurrState("Sign Up")}>Click here</span></p> :

                        <p>Already have an Account?<span onClick={() => setCurrState("Log In")}>Login here</span></p>}


                </div>

            </form>

        </div>
    )
}

export default LoginPop