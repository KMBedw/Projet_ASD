# Dockerfile for my-app-mob

FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g expo-cli @expo/ngrok

# Copy the rest of the application code
COPY . .

# Expose the port that Expo uses
EXPOSE 19000 19001 19002

# Start Expo in non-interactive mode
CMD ["npx", "expo", "start", "--tunnel", "--non-interactive"]