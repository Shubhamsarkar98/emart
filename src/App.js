import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/cart'

import Home from './pages/Home'
import Product from './pages/Product'
import Single from './pages/Single'
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' exect element={<Home/>}/>
        <Route path='/product' exect element={<Product/>}/>
        <Route path='/product/:id'  element={<Single/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App