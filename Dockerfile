FROM node:20
WORKDIR /app
COPY package*.json ./
COPY .env ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start" ]