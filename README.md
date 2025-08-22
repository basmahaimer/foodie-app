# FoodieApp

FoodieApp est une application de commande de repas en ligne développée en React, qui permet aux utilisateurs de découvrir des restaurants, consulter leurs menus et passer commande. L'application utilise Redux pour gérer l'état global et consomme des données depuis une API externe.

---

## 📝 Contexte du projet

FoodieApp vise à offrir une expérience fluide et responsive aux utilisateurs, avec :

- La liste des restaurants récupérée via une API externe.
- La possibilité de consulter les menus détaillés des restaurants.
- Un panier interactif mis à jour en temps réel.
- Une gestion des erreurs et des états de chargement pour une expérience utilisateur optimale.

---

## 🎯 Objectifs

- Développer une application React avec gestion d'état globale (Redux).
- Consommer des données via une API externe avec gestion d'erreurs.
- Créer une interface simple, responsive et performante.
- Optimiser l'affichage et les composants pour une expérience fluide même avec beaucoup de données.

---

## 👤 User Stories

- En tant qu’utilisateur, je veux voir la liste des restaurants récupérée depuis une API.
- En tant qu’utilisateur, je souhaite cliquer sur un restaurant pour voir son menu détaillé.
- En tant qu’utilisateur, je veux ajouter des plats à mon panier et voir le panier mis à jour en temps réel.
- En tant qu’utilisateur, je veux être informé en cas d’erreur (connexion, API indisponible, données manquantes).
- En tant qu’utilisateur, je souhaite une application rapide et fluide, même avec beaucoup de données.

---

## 🖌️ Design

- Interface simple et responsive.
- Mise en avant des cartes de restaurants et menus.
- Messages clairs en cas d’erreur ou d’absence de données.

---

## 📂 Structure

- **Page d’accueil (`/`)** : Liste des restaurants récupérés via l’API.
- **Page restaurant (`/restaurants/:id`)** : Détail du restaurant et liste des plats disponibles.
- **Page panier (`/cart`)** : Articles ajoutés, possibilité de modifier quantité ou supprimer des plats.
- **Gestion d’erreurs** : Affichage de messages lorsque les requêtes échouent ou que le menu est vide.

---

## ⚙️ Fonctionnalités

**Gestion d’état global avec Redux :**

- Liste des restaurants.
- Panier (ajout, suppression, mise à jour des quantités).

**Consommation d’API :**

- fetch + async/await
- Gestion des promises : États `loading`, `success`, `error`.

**Debugging :**

- Utilisation de `console.log`, React DevTools et Redux DevTools.

**Optimisation :**

- Séparation des composants.
- Chargement conditionnel avec `React.memo`.
- Animation légère du badge panier.

---

## 🚀 Installation

Cloner le dépôt :

```bash
git clone https://github.com/ton-utilisateur/FoodieApp.git
cd FoodieApp
Installer les dépendances :

npm install


Lancer le serveur backend (Node.js/Express) :

node server.js


Lancer l’application React :

npm start

🔧 Stack technique

Frontend : React, Redux, React Router, Tailwind CSS

Backend : Node.js, Express

API externe : https://fakerestaurantapi.runasp.net/api/Restaurant

Outils : React DevTools, Redux DevTools
