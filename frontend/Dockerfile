FROM node:24.14.1 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]