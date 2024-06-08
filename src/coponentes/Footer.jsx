import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className=' footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>

                    <img src={assets.logo} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis, inventore vel facilis odit perspiciatis numquam praesentium! Iste voluptas in sit ducimus nemo iure, eius id suscipit corporis alias at!</p>
                    <div className='social-media-icon'>

                        <img src={assets.facebook_icon}></img>
                        <img src={assets.twitter_icon}></img>
                        <img src={assets.linkedin_icon}></img>

                    </div>

                </div>
                <div className='footer-content-center'>

                    <h2>COMPANY</h2>

                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>delivary</li>
                        <li>Privacy Policy</li>

                    </ul>

                </div>
                <div className='footer-content-right'>

                    <h2>GET IN TOUCH</h2>

                    <ul>
                        <li>+1-23-234-567</li>
                        <li>abhi123@gamil.com</li>
                    </ul>

                </div>
            </div>
            <hr />

            <p className='footer-copyright'>Copyright 2024 @</p>

        </div>
    )
}

export default Footer