import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './Routes/ProtectedRoute'
import Auth from './Context/AuthContext/Auth'
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {

  return (

    <BrowserRouter>
      <Auth>
        <Navbar />

        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/Dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/' element={<Navigate to="/Login" />} />
          <Route path='*' element={<div className='otherroute'><h1>404 not found</h1></div>} />
        </Routes>
      </Auth>

    </BrowserRouter>


  )
}

export default App
