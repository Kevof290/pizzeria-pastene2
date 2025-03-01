import { useState } from 'react'
import { Toaster, toast } from 'sonner'
const LoginPage = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
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
    toast.success('Sesión iniciada correctamente')
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
                <div className='d-grid'>
                  <button type='submit' className='btn btn-success w-50 mx-auto'>
                    Iniciar Sesión
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

export default LoginPage
