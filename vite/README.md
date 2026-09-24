# Argent Bank – Front-end

Application React (Vite) du site Argent Bank.

## Prérequis

- Node.js 20.19+ (ou 22.12+)
- Le back-end Argent Bank lancé sur `http://localhost:3001`

## Installation et lancement

```bash
npm install
npm run dev
```

L'application est disponible sur `http://localhost:5173`.

## Routes

| Route      | Page                         |
| ---------- | ---------------------------- |
| `/`        | Accueil                      |
| `/login`   | Connexion                    |
| `/profile` | Profil utilisateur (comptes) |
| `*`        | Page 404                     |

## Structure

```
src/
├── assets/img/   images optimisées (WebP)
├── components/   composants réutilisables (Header, Footer, Hero, FeatureItem, Account…)
├── data/         données statiques (features, comptes)
├── pages/        une page par route
├── styles/       feuille de style principale
├── App.jsx       déclaration des routes (React Router)
└── main.jsx      point d'entrée
```
