# FoodieApp - Plateforme de Commande de Repas en Ligne

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Redux](https://img.shields.io/badge/Redux-4.2.0-purple)
![React Router](https://img.shields.io/badge/React_Router-6.8.0-green)
![Node.js](https://img.shields.io/badge/Node.js-16.0+-green)

FoodieApp est une application moderne de commande de repas en ligne développée avec React, offrant une expérience utilisateur fluide et intuitive pour découvrir des restaurants, consulter leurs menus et passer commande.

**Lien du projet :** [https://github.com/basmahaimer/foodie-app](https://github.com/basmahaimer/foodie-app)

## ✨ Fonctionnalités Principales

- **🏠 Page d'accueil** - Liste des restaurants avec images, évaluations et informations essentielles
- **📋 Menus détaillés** - Consultation complète des plats avec descriptions, prix et images
- **🛒 Panier intelligent** - Ajout/suppression d'articles avec mise à jour en temps réel
- **📱 Design responsive** - Interface adaptée à tous les appareils
- **⚡ Performances optimisées** - Chargement rapide même avec de grandes quantités de données
- **🔔 Notifications contextuelles** - Informations en cas de succès, d'erreur ou de chargement

## 🚀 Démarrage Rapide

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/basmahaimer/foodie-app.git
   cd foodie-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm start
   ```
   L'application sera accessible à l'adresse `http://localhost:3000`

## 🏗️ Architecture du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── RestaurantCard/ # Carte de restaurant
│   ├── DishCard/       # Carte de plat
│   ├── Cart/           # Composants liés au panier
│   └── Layout/         # Composants de mise en page
├── pages/              # Pages de l'application
│   ├── Home/           # Page d'accueil
│   ├── Restaurant/     # Page détail restaurant
│   └── Cart/           # Page panier
├── store/              # Configuration Redux
│   ├── slices/         # Redux slices
│   └── index.js        # Store configuration
├── services/           # Services API
├── hooks/              # Hooks personnalisés
├── utils/              # Utilitaires
└── styles/             # Fichiers de style
```

## 🔌 API Utilisée

FoodieApp consomme les données depuis l'API externe :
- **Endpoint principal** : `https://fakerestaurantapi.runasp.net/api/Restaurant`
- **Format des données** : JSON
- **Gestion des erreurs** : Intercepteurs et retry mechanism implémentés

## 🛠️ Stack Technique

### Frontend
- **React 18** - Librairie UI avec hooks
- **Redux Toolkit** - Gestion d'état global
- **React Router v6** - Navigation
- **CSS Modules** - Styling modulaire
- **React Testing Library** - Tests unitaires

### Outils de Développement
- **Redux DevTools** - Debugging de l'état global
- **React DevTools** - Inspection des composants

## 📋 User Stories Implémentées

- ✅ Visualiser la liste des restaurants depuis l'API
- ✅ Consulter les menus détaillés de chaque restaurant
- ✅ Ajouter/supprimer des plats du panier avec mise à jour en temps réel
- ✅ Recevoir des notifications en cas d'erreur API
- ✅ Interface fluide et performante même avec de grandes quantités de données

## 🎨 Design & Expérience Utilisateur

- Interface moderne avec CSS Modules
- Design responsive pour mobile, tablette et desktop
- Animations subtiles pour les transitions et interactions
- Indicateurs de chargement et états vides

## 🚦 Scripts Disponibles

- `npm start` - Lance le serveur de développement
- `npm test` - Exécute les tests
- `npm run build` - Crée la version de production

## 📸 Captures d'écran

*(Vous pouvez ajouter des captures d'écran de votre application ici)*

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez votre branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez la console navigateur pour les erreurs
2. Assurez-vous que l'API est accessible
3. Consultez les issues existantes sur GitHub
4. Créez une nouvelle issue avec les détails du problème

## 📞 Contact

Développeuse - **Basma Haimer** - [@basmahaimer](https://github.com/basmahaimer)

Lien du projet - [https://github.com/basmahaimer/foodie-app](https://github.com/basmahaimer/foodie-app)

---

**FoodieApp** - Découvrez, Commandez, Savourez! 🍕🍔🍜
