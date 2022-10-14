FROM node:14.17.6-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production
RUN npm install react-scripts

COPY . ./

RUN npm start

EXPOSE 3001
CMD ["npm","start"]
