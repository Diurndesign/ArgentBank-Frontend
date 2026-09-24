import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectToken } from '../features/auth/authSlice.js'

// Les routes enfants ne sont accessibles qu'une fois connecté
export default function ProtectedRoute() {
  const token = useSelector(selectToken)
  return token ? <Outlet /> : <Navigate to="/login" replace />
}
