import notFoundImage from '../img/404.avif'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
      <div className='text-center'>
        <img
          src={notFoundImage}
          alt='Página no encontrada'
          className='img-fluid mb-4'
          style={{ maxWidth: '400px' }}
        />
        <h1 className='display-4 fw-bold text-dark'>¡Oops! Página no encontrada</h1>
        <p className='lead text-secondary mb-4'>
          Parece que la página que estás buscando no existe.
        </p>
        <Link to='/' className='btn btn-success btn-lg'>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound
