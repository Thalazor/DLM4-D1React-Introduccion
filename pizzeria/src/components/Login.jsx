import { Input } from './Input'
import { useState } from 'react'

export const Login = () => {

  const userData = {
    email: 'dbravo@dominio.cl',
    password: '123456'
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailError(false)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let isValid = true

    if (email !== userData.email) {
      setEmailError(true)
      isValid = false
    }

    if (password !== userData.password) {
      setPasswordError(true)
      isValid = false
    }

    isValid && setIsAuthenticated(true)
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="display-4">¡Inicia sesión!</h1>
      <hr />
      <form className="w-50">
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          errorMessage={emailError && 'Email inválido'}
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
          errorMessage={passwordError && 'Contraseña inválida'}
        />
        <button
          onClick={handleSubmit}
          className='btn btn-primary'
        >
          Entrar
        </button>
      </form>

      {isAuthenticated && (
        <div className='alert alert-success mt-4'>
          <p className='font-weight-bold'>¡Bienvenido de vuelta!</p>
        </div>
      )}
    </div>
  )
}
