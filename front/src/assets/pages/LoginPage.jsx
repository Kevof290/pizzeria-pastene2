import { useState, useContext } from 'react'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../store/AuthContext'

const LoginPage = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
  const { login: authenticate } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = login
    if (email.trim() === '' || password.trim() === '') {
      toast.error('Todos los campos son obligatorios')
      return
    }
    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres')
      return
    }
    try {
      const token = await authenticate(email, password)
      if (token) {
        toast.success('Sesión iniciada correctamente')
        navigate('/profile')
      } else {
        toast.error('Credenciales incorrectas')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header bg-black text-white text-center'>
              <h3>Iniciar Sesión</h3>
            </div>
            <div className='card-body'>
              <Toaster position='bottom-right' richColors expand />
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Correo electrónico
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    value={login.email}
                    onChange={handleChange}
                    placeholder='Ingresa tu correo'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>
                    Contraseña
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    value={login.password}
                    onChange={handleChange}
                    placeholder='Ingresa tu contraseña'
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <Button variant='success' type='submit' className='me-md-2'>
                    Iniciar Sesión
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
