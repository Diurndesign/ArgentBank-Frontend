const TOKEN_KEY = 'argentbank_token'

// « Remember me » coché : le token survit à la fermeture du navigateur (localStorage).
// Sinon il ne dure que le temps de l'onglet (sessionStorage).
export const getStoredToken = () =>
  localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY)

export function storeToken(token, rememberMe) {
  clearStoredToken()
  const storage = rememberMe ? localStorage : sessionStorage
  storage.setItem(TOKEN_KEY, token)
}

export function clearStoredToken() {
  localStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(TOKEN_KEY)
}
