import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { selectToken } from '../features/auth/authSlice.js'
import SignInForm from '../components/SignInForm.jsx'

export default function SignIn() {
  const token = useSelector(selectToken)

  // Déjà connecté (ou connexion réussie) : direction la page de profil
  if (token) return <Navigate to="/profile" replace />

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle className="sign-in-icon" aria-hidden="true" />
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  )
}
