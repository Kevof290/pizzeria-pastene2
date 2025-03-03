import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './assets/pages/Cart'
import Footer from './assets/components/Footer'
import Home from './assets/pages/Home'
import LoginPage from './assets/pages/LoginPage'
import Navigation from './assets/components/Navbar'
import RegisterPage from './assets/pages/RegisterPage'
import NotFound from './assets/components/NotFound'
import Profile from './assets/components/Profile'
import Pizza from './assets/pages/Pizza'

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/pizza/p001' element={<Pizza />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
