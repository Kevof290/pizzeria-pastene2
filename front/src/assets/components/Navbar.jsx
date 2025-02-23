import { formatNumber } from '../utils/format'

const Navbar = () => {
  const total = 19850
  const token = false
  return (
    <nav className='bg-dark text-light p-3 d-flex'>
      <div className='container-fluid'>
        <div className='d-flex'>
          <h3 className='mx-3'>Pizzeria Pastene</h3>
          <p className='btn btn-success mx-1'>🍕 Inicio</p>
          {token
            ? (
              <>
                <p className='btn btn-success mx-1'>🔓 Perfil</p>
                <p className='btn btn-success mx-1'>🔒 Cerrar Sesión</p>
              </>
              )
            : (
              <>
                <p className='btn btn-success mx-1'>🔐 Ingresar</p>
                <p className='btn btn-success mx-1'>🔐 Registrarse</p>
              </>
              )}
          <div>
            <p className='btn btn-outline-light nav-end total'>🛒 Total: {formatNumber(total)}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
