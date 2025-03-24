import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../store/AuthContext'
import { toast } from 'sonner'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'
import profileImage from '../img/profile.jpg'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const { getProfile, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile()
        setProfile(data)
      } catch (error) {
        toast.error(error.message)
      }
    }

    fetchProfile()
  }, [getProfile])

  if (!profile) {
    return <div>Cargando perfil...</div>
  }
  const exit = () => {
    logout()
    navigate('/')
  }
  return (
    <Container className='my-5'>
      <Row className='justify-content-center'>
        <Col md={8} lg={6}>
          <Card className='shadow'>
            <Card.Body className='text-center'>
              <div className='d-flex justify-content-center'>
                <Image
                  src={profileImage}
                  alt=''
                  roundedCircle
                  fluid
                  style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                />
              </div>
              <h2 className='mt-3 mb-1'>{profile.name || profile.email}</h2>
              <p className='text-muted mb-4'>Amante de las Pizzas y Aventuras</p>
              <Row className='mb-4'>
                <Col>
                  <p className='mb-1 fw-bold'>Correo electrónico</p>
                  <p className='text-muted'>{profile.email}</p>
                </Col>
                <Col>
                  <p className='mb-1 fw-bold'>Teléfono</p>
                  <p className='text-muted'>{profile.phone || 'No registrado'}</p>
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <p className='mb-1 fw-bold'>Pizza favorita</p>
                  <p className='text-muted'>{profile.favoritePizza || 'No registrada'}</p>
                </Col>
                <Col>
                  <p className='mb-1 fw-bold'>Dirección</p>
                  <p className='text-muted'>{profile.address || 'No registrada'}</p>
                </Col>
              </Row>
              <div className='d-grid gap-2 d-md-flex justify-content-center'>
                <Button variant='success' className='me-md-2'>
                  Editar Perfil
                </Button>
                <Button variant='outline-secondary' onClick={exit}>Cerrar Sesión</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
