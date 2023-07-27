FROM node:18.17.0-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

ARG TRILHA_API_URL
ARG WEATHER_API_KEY

ENV TRILHA_API_URL=$TRILHA_API_URL
ENV AVALIACAO_API_URL=$AVALIACAO_API_URL


CMD ["yarn", "start"]


