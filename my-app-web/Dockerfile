# Utiliser une image Node.js officielle comme image de base
FROM node:18-alpine

# Créer et définir le répertoire de travail de l'application
WORKDIR /usr/src/app

# Copier les fichiers de package et package-lock
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Compiler l'application pour la production
RUN npm run build

# Installer un serveur HTTP pour servir les fichiers statiques
RUN npm install -g serve

# Exposer le port de l'application
EXPOSE 3001

# Définir la commande pour démarrer le serveur
CMD ["serve", "-s", "build"]
