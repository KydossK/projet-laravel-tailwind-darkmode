# 🎵 Structure Laravel + Tailwind + Dark Mode

Ce projet est une **base de démarrage prête à l’emploi** pour créer rapidement des sites Laravel modernes avec :

- ✅ Laravel installé
- ✅ Tailwind CSS (avec une palette de couleurs personnalisée)
- ✅ Alpine.js pour gérer l’interactivité
- ✅ Un bouton dark/light mode fonctionnel (persistant avec localStorage)
- ✅ Vite.js pour la compilation des assets
- ✅ Une structure claire et réutilisable pour les futurs projets

---

## 📁 Structure des dossiers

projet-laravel-tailwind-darkmode/ ├── app/ ├── resources/ │ ├── css/ │ │ └── app.css # Import Tailwind CSS │ ├── js/ │ │ └── app.js # Initialisation Alpine.js │ └── views/ │ └── layouts/ │ └── app.blade.php # Layout avec dark/light mode ├── tailwind.config.js # Palette personnalisée + config dark mode ├── postcss.config.js # PostCSS config pour Vite ├── vite.config.js ├── package.json └── ...

---

## 🚀 Utilisation

### 1. Cloner ou extraire ce projet

```bash
git clone <repo> mon-nouveau-projet
cd mon-nouveau-projet
ou extraire l’archive .zip si tu l’utilises en local.

2. Installer les dépendances
bash
Copier
Modifier
composer install
npm install
3. Configurer l’environnement Laravel
bash
Copier
Modifier
cp .env.example .env
php artisan key:generate
4. Compiler les fichiers CSS/JS avec Vite
bash
Copier
Modifier
npm run dev
5. Lancer le serveur de développement Laravel
bash
Copier
Modifier
php artisan serve
Et ouvrir :
👉 http://127.0.0.1:8000

🌗 Fonctionnalité Dark/Light Mode
Le mode sombre est activé par une classe .dark sur <html> et contrôlé avec Alpine.js.
Le bouton situé en haut à droite permet de basculer entre les deux thèmes.
Le choix est sauvegardé automatiquement dans le localStorage.

🎨 Palette personnalisée (extrait)
Des couleurs intermédiaires sont disponibles pour plus de nuance :

js
Copier
Modifier
gray: {
  50: '#f9fafb',
  150: '#f3f4f6',
  ...
  950: '#111827',
},
blue: {
  50: '#eff6ff',
  150: '#dbeafe',
  ...
  950: '#1e3a8a',
},
// etc.

📄 Auteur
Projet préparé par Pierre 🦇
