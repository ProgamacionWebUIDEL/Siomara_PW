FROM node:22-bullseye

WORKDIR /Clase1/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD [ "npm","start"]