import { formatNumber } from '../utils/format'
import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar, Badge } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext'
import { AuthContext } from '../store/AuthContext'
import '../styles/Navbar.css'

const Navigation = () => {
  const { cart } = useContext(CartContext)
  const { isAuthenticated, logout } = useContext(AuthContext)
  const total = cart.reduce((acc, { price, count }) => acc + price * count, 0)
  const itemCount = cart.reduce((acc, { count }) => acc + count, 0)

  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Container>
        <Navbar.Brand as={Link} to='/'>Pizzería Pastene
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            {isAuthenticated
              ? (
                <>
                  <Nav.Link as={Link} to='/profile'>🔓 Perfil</Nav.Link>
                  <Nav.Link as={Link} to='/' onClick={logout}>🔒 Cerrar Sesión</Nav.Link>
                </>
                )
              : (
                <>
                  <Nav.Link as={Link} to='/login'>Iniciar Sesión</Nav.Link>
                  <Nav.Link as={Link} to='/register'>Registrarse</Nav.Link>
                </>
                )}
          </Nav>
        </Navbar.Collapse>
        <div className='d-flex text-end ms-auto'>
          <Link to='/cart'>
            <Button variant='success' className='ms-auto'>Carrito <span>{formatNumber(total)}</span>
              {itemCount > 0 && (
                <Badge pill bg='danger' className='ms-2'>
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
        </div>

      </Container>
    </Navbar>
  )
}

export default Navigation
