# builder
FROM node:alpine as builder

ENV NPM_CONFIG_LOGLEVEL warn
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV NODE_ENV=production

COPY . /home/node/app/

WORKDIR /home/node/app
RUN npm i -q && \
    npm run build:client

# app
FROM nginx:alpine
COPY --from=builder  /home/node/app/build /usr/share/nginx/html
