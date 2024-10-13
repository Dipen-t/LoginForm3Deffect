import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { Navigate } from 'react-router'

function App() {
  const [isLoggedin, setisLoggedin] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            isLoggedin ? <Dashboard /> : <Navigate to="/login" />
          } />  
          <Route path="/login" element={isLoggedin ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
