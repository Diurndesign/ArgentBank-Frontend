import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserProfile } from '../features/user/userSlice.js'

// Le formulaire est monté à chaque clic sur « Edit Name » :
// ses champs partent donc toujours du nom actuel présent dans le store
export default function EditNameForm({ firstName, lastName, onClose }) {
  const dispatch = useDispatch()
  const [values, setValues] = useState({ firstName, lastName })
  const [error, setError] = useState(null)
  const [isSaving, setIsSaving] = useState(false)

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newFirstName = values.firstName.trim()
    const newLastName = values.lastName.trim()

    if (!newFirstName || !newLastName) {
      setError('First name and last name are required.')
      return
    }

    setIsSaving(true)
    setError(null)
    try {
      await dispatch(
        updateUserProfile({ firstName: newFirstName, lastName: newLastName }),
      ).unwrap()
      onClose()
    } catch (message) {
      setError(message)
      setIsSaving(false)
    }
  }

  return (
    <form className="edit-name-form" onSubmit={handleSubmit}>
      <div className="edit-name-inputs">
        <label htmlFor="firstName" className="sr-only">
          First name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder={firstName}
          value={values.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName" className="sr-only">
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder={lastName}
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      {error && (
        <p className="edit-name-error" role="alert">
          {error}
        </p>
      )}
      <div className="edit-name-buttons">
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
