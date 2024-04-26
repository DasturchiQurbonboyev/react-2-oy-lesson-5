import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Wishlist from './pages/wislist/Wishlist'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Single from './components/single/Single'
import Cart from './components/cart/Cart'
import CheckOut from "./components/checkOut/CheckOut.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/single' element={<Single />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkOut' element={<CheckOut />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
