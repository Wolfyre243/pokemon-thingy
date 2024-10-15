FROM node:latest

# ENV NODE_ENV production
WORKDIR /home/pokedex

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Build the app for production and launch
RUN npx remix vite:build
CMD npm run start