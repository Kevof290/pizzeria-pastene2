import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  const stateGlobal = {
    isAuthenticated,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={stateGlobal}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
