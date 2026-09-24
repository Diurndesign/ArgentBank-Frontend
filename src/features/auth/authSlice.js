import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginRequest } from '../../services/api.js'
import {
  clearStoredToken,
  getStoredToken,
  storeToken,
} from '../../utils/tokenStorage.js'

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const { token } = await loginRequest(email, password)
      storeToken(token, rememberMe)
      return token
    } catch (error) {
      // 400 = utilisateur inconnu ou mot de passe invalide : message volontairement générique
      return rejectWithValue(
        error.status === 400 ? 'Invalid username or password.' : error.message,
      )
    }
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: getStoredToken(),
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null
      state.status = 'idle'
      state.error = null
    },
    clearAuthError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { logout, clearAuthError } = authSlice.actions

// Déconnexion : on efface le token du navigateur, puis on vide le store
export const logoutUser = () => (dispatch) => {
  clearStoredToken()
  dispatch(logout())
}

export const selectToken = (state) => state.auth.token
export const selectAuthStatus = (state) => state.auth.status
export const selectAuthError = (state) => state.auth.error

export default authSlice.reducer
