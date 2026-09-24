import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearAuthError,
  loginUser,
  selectAuthError,
  selectAuthStatus,
} from '../features/auth/authSlice.js'

export default function SignInForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const dispatch = useDispatch()
  const status = useSelector(selectAuthStatus)
  const error = useSelector(selectAuthError)
  const isLoading = status === 'loading'

  // On efface un éventuel message d'erreur quand on quitte la page
  useEffect(() => () => dispatch(clearAuthError()), [dispatch])

  const handleSubmit = (event) => {
    event.preventDefault()
    // La redirection vers /profile est gérée par la page SignIn une fois le token reçu
    dispatch(loginUser({ email: username.trim(), password, rememberMe }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {error && (
        <p className="sign-in-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="sign-in-button" disabled={isLoading}>
        {isLoading ? 'Signing in…' : 'Sign In'}
      </button>
    </form>
  )
}
