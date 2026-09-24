import { useState } from 'react'
import EditNameForm from './EditNameForm.jsx'

export default function UserHeader({ firstName, lastName }) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <div className="header">
        <h1>Welcome back</h1>
        <EditNameForm
          firstName={firstName}
          lastName={lastName}
          onClose={() => setIsEditing(false)}
        />
      </div>
    )
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button
        type="button"
        className="edit-button"
        onClick={() => setIsEditing(true)}
      >
        Edit Name
      </button>
    </div>
  )
}
