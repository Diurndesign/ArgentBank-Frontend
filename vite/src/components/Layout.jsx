import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ userName }) {
  return (
    <>
      <Header userName={userName} />
      <Outlet />
      <Footer />
    </>
  )
}
