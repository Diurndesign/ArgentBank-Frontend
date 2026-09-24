import { FaUserCircle } from 'react-icons/fa'
import SignInForm from '../components/SignInForm.jsx'

export default function SignIn() {
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
