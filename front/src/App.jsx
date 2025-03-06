import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, Home, LoginPage, RegisterPage, Pizza } from './assets/pages/index'
import { Header, Profile, NotFound, Navigation, Footer } from './assets/components/index'

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <BrowserRouter>
        <Navigation />
        <Header />
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
