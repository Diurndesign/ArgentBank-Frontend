const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api/v1'

export class ApiError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
  }
}

async function request(path, { token, body, method = 'POST' } = {}) {
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
  request('/user/login', { body: { email, password } })

// Réponse : { email, firstName, lastName, id, createdAt, updatedAt }
export const getProfileRequest = (token) => request('/user/profile', { token })

// Enregistre le nouveau nom en base. Réponse : le profil mis à jour
export const updateProfileRequest = (token, { firstName, lastName }) =>
  request('/user/profile', {
    token,
    method: 'PUT',
    body: { firstName, lastName },
  })
