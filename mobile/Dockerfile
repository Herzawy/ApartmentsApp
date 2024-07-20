FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g expo-cli@6.3.10


COPY . .

EXPOSE 19000
EXPOSE 19001

CMD ["expo", "start", "--tunnel"]
