import { useState } from 'react'
import EditUserInfoForm from './EditUserInfoForm.jsx'

export default function UserHeader({ profile }) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <div className="header">
        <h1>Edit user info</h1>
        <EditUserInfoForm
          profile={profile}
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
        {profile.firstName} {profile.lastName}!
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
