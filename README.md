# My Fiancial App

## Table of contents

1. General Info
2. Technologies
3. Installation - Scripts
4. Notes

### General Info

---

My Financial App is a static web application that I developed as part of my interview process at Yeap.ai.
The application is very basic, and its purpose is to help me practice using Yeap's technology stack in preparation for the interview.

### Technologies

---

A list of technologies used within the project:

- [React JS](https://reactjs.org/): Version ^18.3.1
- [Vite JS](https://vite.dev/): Version ^4.5.5
- [ESlint](https://eslint.org/): Version ^9.15.0
- [Tailwind CSS](https://tailwindcss.com/): Version ^3.4.15
- [AG-Grid](https://www.ag-grid.com): Version ^32.3.3
- [Tanstack React Query](https://tanstack.com): Version ^5.61.4

### Available Scripts

How to install the project locally ?

```powershell
$ git clone https://github.com/jeanbaptisteLedig/MyFinancialApp.git my-financial-app
$ git cd my-financial-app
$ npm install
$ npm run dev
```

#### `npm run dev`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload automatically if you make edits.  
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production into the `dist` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### Project Structure

```plaintext
├── public/            # Static assets (accessible via /)
│   ├── logo.png
│   ├── assets/
├── src/               # Source code
|   ├── App
|       ├── App.tsx    # Main app component
│   ├── components/    # React components
│   ├── hooks/         # React custom hooks
│   ├── interfaces/    # Interfaces or types
│   ├── pages/         # Page components for routing
│   ├── services/      # App services
│   ├── index.tsx      # Entry point for the app
│   ├── index.css      # Global styles
├── vite.config.ts     # Vite configuration file
├── tailwind.config.ts # Tailwind configuration file
├── eslint.config.ts   # Eslint configuration file
├── .prettierrc        # Prettier rules
├── package.json       # Project dependencies and scripts
```

### Notes

Pour gagner du temps sur la mise en place de la structure globale, j'ai préféré un composant clé en main : DashboardLayout de Toolpad (MUI). Cependant, j'ai rencontré une difficulté lors de son intégration, car les routes définies dans le routeur doivent être imbriquées sous une route principale ('/') qui retourne le composant Layout.

Le composant Layout encapsule le DashboardLayout et utilise le composant Outlet de react-router-dom pour rendre dynamiquement les pages enfants. Ainsi, la structure diffère légèrement d'une configuration classique :

Les pages (comme CompaniesPage ou CompanyPage) sont des enfants de Layout.
Layout, lui-même, est un enfant du composant principal App, qui gère le contexte global de l'application.
Cette hiérarchie permet d'organiser clairement les layouts imbriqués, mais demande une attention particulière à la structure des routes.
