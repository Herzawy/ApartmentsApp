FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g expo-cli

COPY . .

EXPOSE 19000
EXPOSE 19001

CMD ["expo", "start"]
