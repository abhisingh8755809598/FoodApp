import { useState } from 'react'
import './App.css'
import Navbar from './coponentes/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './coponentes/Home'
import Cart from './coponentes/Cart'
import PlaceOrder from './PlaceOrder'
import Footer from './coponentes/Footer'
import LoginPop from './coponentes/LoginPop'


function App() {


  const [showLogin, setShowLogin] = useState(false)



  return (
    <>

      {showLogin ? <LoginPop setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>

        <Navbar setShowLogin={setShowLogin} />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/placeorder' element={<PlaceOrder />}></Route>

        </Routes>

      </div>

      <Footer />

    </>
  )
}

export default App
