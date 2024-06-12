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

# Exposer le port de l'API
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["node", "server.js"]
