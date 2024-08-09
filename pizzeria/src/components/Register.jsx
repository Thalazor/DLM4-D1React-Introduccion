import { useState } from 'react'
import { Input } from './Input'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const [isDataValid, setIsDataValid] = useState(false)

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const validatePassword = (password) => {
    return password.length >= 6
  }

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword
  }

  const handleRegister = (e) => {
    e.preventDefault()
    let isValid = true

    if (!validateEmail(email)) {
      setEmailError(true)
      isValid = false
    } else {
      setEmailError(false)
    }

    if (!validatePassword(password)) {
      setPasswordError(true)
      isValid = false
    } else {
      setPasswordError(false)
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      setConfirmPasswordError(true)
      isValid = false
    } else {
      setConfirmPasswordError(false)
    }

    isValid && setIsDataValid(true)
  }

  return (
    <div className='container d-flex flex-column align-items-center justify-content-center min-vh-100'>
      <h1 className='display-4'>¡Regístrate!</h1>
      <p className='lead'>
        ¡Bienvenido a la mejor pizzería de la ciudad!
      </p>
      <hr />
      <form className='w-50'>
        <Input
          type='email'
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={emailError && 'Correo electrónico inválido'}
        />
        <Input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={
            passwordError && 'La contraseña debe tener al menos 6 caracteres'
          }
        />
        <Input
          type='password'
          placeholder='Confirmar contraseña'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          errorMessage={confirmPasswordError && 'Las contraseñas no coinciden'}
        />
        <button
          onClick={handleRegister}
          className='btn btn-primary'
        >
          Registrarme
        </button>
      </form>

      { isDataValid && (
        <div className='alert alert-success mt-4'>
          <p className='font-weight-bold'>¡Registro exitoso!</p>
          <p>¡Bienvenido a la mejor pizzería de la ciudad!</p>
        </div>
      )}
    </div>
  )
}
