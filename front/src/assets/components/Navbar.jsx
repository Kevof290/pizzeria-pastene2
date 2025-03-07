import { formatNumber } from '../utils/format'
import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar, Badge } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext'

const Navigation = () => {
  const { cart } = useContext(CartContext)
  const total = cart.reduce((acc, { price, count }) => acc + price * count, 0)
  const itemCount = cart.reduce((acc, { count }) => acc + count, 0)
  const token = false
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>Pizzería Pastene
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
          {token
            ? (
              <>
                <p className='btn btn-success mx-1'>🔓 Perfil</p>
                <p className='btn btn-success mx-1'>🔒 Cerrar Sesión</p>
              </>
              )
            : (
              <>
                <Nav.Link as={Link} to='/login'>Iniciar Sesión</Nav.Link>
                <Nav.Link as={Link} to='/register'>Registrarse</Nav.Link>
              </>
              )}
        </Nav>
        <div className='d-flex text-end ms-auto'>

          <Link to='/cart'>
            <Button variant='outline-success' className='ms-auto'>Carrito <span>{formatNumber(total)}</span>
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
