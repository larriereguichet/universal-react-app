# client builder
FROM node:alpine as builder

ENV NODE_ENV development
ENV NPM_CONFIG_LOGLEVEL warn
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

COPY . /home/node/app/

WORKDIR /home/node/app
RUN npm i && \
    npm run build:client:prod

# frontend
FROM guzart/nginx-h5bp:stable-alpine

ENV NODE_ENV production

ADD ./etc/docker/frontend/default /etc/nginx/sites-available
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder  /home/node/app/dist/client.js /usr/share/nginx/html
COPY --from=builder  /home/node/app/public /usr/share/nginx/html
