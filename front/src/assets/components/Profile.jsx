import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'
import profileImage from '../img/profile.webp'

const Profile = () => {
  return (
    <Container className='my-5'>
      <Row className='justify-content-center'>
        <Col md={8} lg={6}>
          <Card className='shadow'>
            <Card.Body className='text-center'>
              <div className='d-flex justify-content-center'>
                <Image
                  src={profileImage}
                  alt='Foto de perfil de Snoopy'
                  roundedCircle
                  fluid
                  style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                />
              </div>
              <h2 className='mt-3 mb-1'>Snoopy</h2>
              <p className='text-muted mb-4'>Amante de las Pizzas y Aventuras</p>
              <Row className='mb-4'>
                <Col>
                  <p className='mb-1 fw-bold'>Correo electrónico</p>
                  <p className='text-muted'>snoopy@pizzas.com</p>
                </Col>
                <Col>
                  <p className='mb-1 fw-bold'>Teléfono</p>
                  <p className='text-muted'>+1 555 PIZZA</p>
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <p className='mb-1 fw-bold'>Pizza favorita</p>
                  <p className='text-muted'>Pepperoni con extra de queso</p>
                </Col>
                <Col>
                  <p className='mb-1 fw-bold'>Dirección</p>
                  <p className='text-muted'>123 Calle del Perro Feliz</p>
                </Col>
              </Row>
              <div className='d-grid gap-2 d-md-flex justify-content-center'>
                <Button variant='success' className='me-md-2'>
                  Editar Perfil
                </Button>
                <Button variant='outline-secondary'>Cerrar Sesión</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
