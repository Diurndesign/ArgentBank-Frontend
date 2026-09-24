import UserHeader from '../components/UserHeader.jsx'
import Account from '../components/Account.jsx'
import { accounts } from '../data/accounts.js'

export default function Profile() {
  return (
    <main className="main bg-dark">
      {/* Nom statique en attendant la récupération du profil via l'API (étape suivante) */}
      <UserHeader firstName="Tony" lastName="Jarvis" />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <Account key={account.id} {...account} />
      ))}
    </main>
  )
}
