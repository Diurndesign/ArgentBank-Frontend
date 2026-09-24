import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProfileRequest } from '../../services/api.js'
import { logout, logoutUser } from '../auth/authSlice.js'

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      return await getProfileRequest(getState().auth.token)
    } catch (error) {
      // 401 = token invalide ou expiré : on déconnecte l'utilisateur
      if (error.status === 401) dispatch(logoutUser())
      return rejectWithValue(error.message)
    }
  },
  {
    // Évite un double appel si une requête est déjà en cours
    condition: (_, { getState }) => getState().user.status !== 'loading',
  },
)

const initialState = {
  profile: null,
  status: 'idle',
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        const { firstName, lastName, email } = action.payload
        state.status = 'succeeded'
        state.profile = { firstName, lastName, email }
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      // À la déconnexion, les informations de l'utilisateur disparaissent du store
      .addCase(logout, () => initialState)
  },
})

export const selectUserProfile = (state) => state.user.profile

export default userSlice.reducer
