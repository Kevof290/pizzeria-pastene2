import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext)
  return isAuthenticated ? children : <Navigate to='/login' />
}

const ReverseProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext)
  return isAuthenticated ? <Navigate to='/' /> : children
}

export { ProtectedRoute, ReverseProtectedRoute }
