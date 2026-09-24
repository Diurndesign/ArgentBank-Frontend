import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Nom statique en attendant la connexion via Redux (étape suivante) */}
      <Route element={<Layout userName="Tony" />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
