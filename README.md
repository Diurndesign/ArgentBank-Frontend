# Argent Bank – Front-end

Application React (Vite) du site Argent Bank.

## Prérequis

- Node.js 20.19+ (ou 22.12+)
- Le back-end Argent Bank ([ArgentBank-Backend](https://github.com/OpenClassrooms-Student-Center/ArgentBank-Backend)) lancé sur `http://localhost:3001`, base remplie avec `npm run populate-db`

## Installation et lancement

```bash
npm install
npm run dev
```

L'application est disponible sur `http://localhost:5173`.

L'URL de l'API peut être changée en copiant `.env.example` en `.env` (variable `VITE_API_URL`).

## Comptes de test

| Email              | Mot de passe  | Pseudo    |
| ------------------ | ------------- | --------- |
| `tony@stark.com`   | `password123` | `Iron`    |
| `steve@rogers.com` | `password456` | `Captain` |

## Routes

| Route      | Page                         |
| ---------- | ---------------------------- |
| `/`        | Accueil                      |
| `/login`   | Connexion                    |
| `/profile` | Profil utilisateur (accessible uniquement connecté), modification du pseudo |
| `*`        | Page 404                     |

## Structure

```
src/
├── app/          store Redux
├── assets/img/   images optimisées (WebP)
├── components/   composants réutilisables (Header, Footer, Hero, FeatureItem, Account…)
├── data/         données statiques (features, comptes)
├── features/     slices Redux (auth : token, user : profil)
├── pages/        une page par route
├── services/     appels à l'API
├── styles/       feuille de style principale
├── utils/        stockage du token (localStorage / sessionStorage)
├── App.jsx       déclaration des routes (React Router)
└── main.jsx      point d'entrée
```
