import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import Register from '../Register/Register'
import Login from '../Login/Login'

const RouteConfig = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route  path='/register' element={<Register/>} />
            <Route  path='/login' element={<Login/>} />
            <Route  path='/*' element={<>page not found</>} />

        </Routes>


    </div>
  )
}

export default RouteConfig