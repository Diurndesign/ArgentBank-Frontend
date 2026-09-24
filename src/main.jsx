import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import App from './App.jsx'
import './styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* Navigation synchrone : la page et le store Redux se mettent à jour ensemble
          (sinon, à la déconnexion, /profile redirigerait vers /login au lieu de l'accueil) */}
      <BrowserRouter useTransitions={false}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
