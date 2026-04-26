FROM node:20-alpine

# Dossier de travail
WORKDIR /app

# Copier uniquement les fichiers de dépendances d'abord (cache Docker optimisé)
COPY package*.json ./

# Installer uniquement les dépendances de production
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 3000

# Commande de démarrage
CMD ["node", "server.js"]