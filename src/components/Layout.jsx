import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { selectToken } from '../features/auth/authSlice.js'
import {
  fetchUserProfile,
  selectUserProfile,
} from '../features/user/userSlice.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const profile = useSelector(selectUserProfile)

  // Dès qu'un token est présent (connexion ou rechargement de page), on récupère le profil
  useEffect(() => {
    if (token && !profile) dispatch(fetchUserProfile())
  }, [token, profile, dispatch])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
