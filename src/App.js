import React from 'react'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
