import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Cart, Home, LoginPage, RegisterPage, Pizza, NotFound } from '../pages/index'
import { Header, Profile } from '../components/index'
import { ProtectedRoute, ReverseProtectedRoute } from '../components/ProtectedRoute'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<><Header /><Home /></>} />
      <Route path='/register' element={<ReverseProtectedRoute><RegisterPage /></ReverseProtectedRoute>} />
      <Route path='/login' element={<ReverseProtectedRoute><LoginPage /></ReverseProtectedRoute>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path='/pizza/:id' element={<Pizza />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
