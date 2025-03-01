import { formatNumber } from '../utils/format'
import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {
  const total = 19850
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
                <Nav.Link as={Link} to='/Login'>Iniciar Sesión</Nav.Link>
                <Nav.Link as={Link} to='/Register'>Registrarse</Nav.Link>
              </>
              )}
        </Nav>
        <div className='d-flex text-end ms-auto'>

          <Link to='/cart'>
            <Button variant='success' className='ms-auto'>Carrito <span>{formatNumber(total)}</span>
            </Button>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigation
