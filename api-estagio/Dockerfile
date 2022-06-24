# syntax=docker/dockerfile:1

FROM node:16.14.2

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

COPY .env.example .env

RUN npm i -g @adonisjs/cli
RUN adonis key:generate
#RUN adonis migration:run
#RUN adonis serve --dev