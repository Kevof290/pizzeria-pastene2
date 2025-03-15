import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, Home, LoginPage, RegisterPage, Pizza } from './assets/pages/index'
import { Header, Profile, NotFound, Navigation, Footer } from './assets/components/index'
import CartProvider from './assets/store/CartContext'
import AuthProvider from './assets/store/AuthContext'
import { ProtectedRoute, ReverseProtectedRoute } from './assets/components/ProtectedRoute'

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <BrowserRouter>
        <CartProvider>
          <AuthProvider>
            <Navigation />
            <Routes>
              <Route path='/' element={<><Header /><Home /></>} />
              <Route path='/register' element={<ReverseProtectedRoute><RegisterPage /></ReverseProtectedRoute>} />
              <Route path='/login' element={<ReverseProtectedRoute><LoginPage /></ReverseProtectedRoute>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path='/pizza/:id' element={<Pizza />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
