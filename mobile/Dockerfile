FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install expo-cli --save-dev


COPY . .

EXPOSE 19000
EXPOSE 19001

CMD ["expo", "start"]
