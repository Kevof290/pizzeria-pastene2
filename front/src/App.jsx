import { BrowserRouter } from 'react-router-dom'
import { Navigation, Footer } from './assets/components/index'
import AppRoutes from './assets/routes/AppRoutes'
import AppContext from './assets/routes/AppContext'

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <BrowserRouter>
        <AppContext>
          <Navigation />
          <AppRoutes />
        </AppContext>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
