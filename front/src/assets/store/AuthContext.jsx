import { createContext, useMemo, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password })
      const { token } = res.data
      if (token) {
        setToken(token)
        localStorage.setItem('token', token)
      }
      return token
    } catch (error) {
      throw new Error('Error al iniciar sesión')
    }
  }

  const register = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { email, password })
      const { token } = res.data
      if (token) {
        setToken(token)
        localStorage.setItem('token', token)
      }
      return token
    } catch (error) {
      throw new Error('Error al registrar')
    }
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }
  const getProfile = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return res.data
    } catch (error) {
      throw new Error('Error al obtener el perfil')
    }
  }
  const isAuthenticated = useMemo(() => !!token, [token])

  const stateGlobal = useMemo(() => ({
    isAuthenticated,
    login,
    register,
    logout,
    getProfile
  }), [isAuthenticated, login, register, logout, getProfile])

  return (
    <AuthContext.Provider value={stateGlobal}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
