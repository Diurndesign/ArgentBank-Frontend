import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { logoutUser, selectToken } from '../features/auth/authSlice.js'
import { selectUserProfile } from '../features/user/userSlice.js'
import logo from '../assets/img/argentBankLogo.webp'

export default function Header() {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const profile = useSelector(selectUserProfile)

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
          width="200"
          height="54"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <FaUserCircle aria-hidden="true" /> {profile?.firstName}
            </Link>
            <Link
              className="main-nav-item"
              to="/"
              onClick={() => dispatch(logoutUser())}
            >
              <FaSignOutAlt aria-hidden="true" /> Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <FaUserCircle aria-hidden="true" /> Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
