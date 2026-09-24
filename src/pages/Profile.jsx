import { useSelector } from 'react-redux'
import { selectUserProfile } from '../features/user/userSlice.js'
import UserHeader from '../components/UserHeader.jsx'
import Account from '../components/Account.jsx'
import { accounts } from '../data/accounts.js'

export default function Profile() {
  const profile = useSelector(selectUserProfile)

  // Profil en cours de chargement
  if (!profile) return <main className="main bg-dark" />

  return (
    <main className="main bg-dark">
      <UserHeader profile={profile} />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <Account key={account.id} {...account} />
      ))}
    </main>
  )
}
