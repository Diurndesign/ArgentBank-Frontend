const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api/v1'

export class ApiError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
  }
}

async function request(path, { token, body, method = 'GET' } = {}) {
  let response
  try {
    response = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new ApiError(0, 'Unable to reach the server. Please try again later.')
  }

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new ApiError(response.status, data.message ?? 'Unexpected error.')
  }
  return data.body
}

// Réponse : { token }
export const loginRequest = (email, password) =>
  request('/user/login', { method: 'POST', body: { email, password } })

// Réponse : { email, firstName, lastName, userName, id, createdAt, updatedAt }
export const getProfileRequest = (token) => request('/user/profile', { token })

// Enregistre le nouveau pseudo en base (seul champ modifiable). Réponse : le profil mis à jour
export const updateProfileRequest = (token, userName) =>
  request('/user/profile', { token, method: 'PUT', body: { userName } })
