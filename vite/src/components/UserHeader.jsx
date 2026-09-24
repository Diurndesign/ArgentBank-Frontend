export default function UserHeader({ firstName, lastName }) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button type="button" className="edit-button">
        Edit Name
      </button>
    </div>
  )
}
