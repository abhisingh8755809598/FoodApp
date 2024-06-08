import React from 'react'
import { assets } from "../assets/assets"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState("menu")


  return (
    <div className='navBar'>

      <Link to={"/"}><img src={assets.logo} className='logo' /></Link>

      <ul className='navbar-menu'>

        <Link to="/"><ul onClick={() => { setMenu("home") }} className={menu === "home" ? "active" : ""}>Home</ul></Link>
        <a href='#explore-menu' onClick={() => { setMenu("menu") }} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => { setMenu("mobile-app") }} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => { setMenu("contact us") }} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>

      <div className='navbar-right'>

        <img src={assets.search_icon} />

        <div className='navbar-search-icon'>

          <Link to={"/cart"}><img src={assets.basket_icon} /></Link>
          <div className='dot'>0</div>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign in</button>

      </div>


    </div >
  )
}

export default Navbar