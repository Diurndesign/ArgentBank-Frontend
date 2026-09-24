import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="main bg-dark not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Back to the home page</Link>
    </main>
  )
}
