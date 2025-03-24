import { useState, useContext } from 'react'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'
const RegisterPage = () => {
  const [register, setRegister] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { register: registerUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password, confirmPassword } = register
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      toast.error('Todos los campos son obligatorios')
      return
    }
    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres')
      return
    }
    try {
      const token = await registerUser(email, password)
      if (token) {
        toast.success('Registro exitoso')
        navigate('/profile')
      } else {
        toast.error('Error al registrar')
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
              <h3>Regístrate</h3>
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
                    value={register.email}
                    onChange={handleChange}
                    placeholder='tucorreo@ejemplo.cl'
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
                    value={register.password}
                    onChange={handleChange}
                    placeholder='Crea una contraseña'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='confirmarPassword' className='form-label'>
                    Confirmar contraseña
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    name='confirmPassword'
                    value={register.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirma tu contraseña'
                  />
                </div>
                <div className='d-grid'>
                  <button type='submit' className='btn btn-success w-50 mx-auto'>
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegisterPage
