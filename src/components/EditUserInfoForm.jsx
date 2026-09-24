import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserProfile } from '../features/user/userSlice.js'

// Le formulaire est monté à chaque clic sur « Edit Name » :
// le champ part donc toujours du pseudo actuel présent dans le store.
// Seul le pseudo est modifiable, le prénom et le nom sont affichés en lecture seule
export default function EditUserInfoForm({ profile, onClose }) {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState(profile.userName ?? '')
  const [error, setError] = useState(null)
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newUserName = userName.trim()

    if (!newUserName) {
      setError('User name is required.')
      return
    }

    setIsSaving(true)
    setError(null)
    try {
      await dispatch(updateUserProfile(newUserName)).unwrap()
      onClose()
    } catch (message) {
      setError(message)
      setIsSaving(false)
    }
  }

  return (
    <form className="edit-user-form" onSubmit={handleSubmit}>
      <div className="edit-user-field">
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className="edit-user-field">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" value={profile.firstName} disabled />
      </div>
      <div className="edit-user-field">
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" value={profile.lastName} disabled />
      </div>
      {error && (
        <p className="edit-user-error" role="alert">
          {error}
        </p>
      )}
      <div className="edit-user-buttons">
        <button type="submit" disabled={isSaving}>
          {isSaving ? 'Saving…' : 'Save'}
        </button>
        <button type="button" onClick={onClose} disabled={isSaving}>
          Cancel
        </button>
      </div>
    </form>
  )
}
