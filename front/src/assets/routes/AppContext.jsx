import AuthProvider from '../store/AuthContext'
import CartProvider from '../store/CartContext'

const AppContext = ({ children }) => {
  return (
    <CartProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </CartProvider>
  )
}

export default AppContext
