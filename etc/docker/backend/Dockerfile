# server builder
FROM node:alpine as builder

ENV NODE_ENV development
ENV NPM_CONFIG_LOGLEVEL warn
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

COPY . /home/node/app/

WORKDIR /home/node/app
RUN npm i && \
    npm run build:server:prod

# node backend
FROM node:alpine

ENV NODE_ENV production
ENV npm_package_config_scheme http
ENV npm_package_config_domain localhost
ENV npm_package_config_port 3000
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /home/node/
COPY --from=builder  /home/node/app/package.json /home/node/
COPY --from=builder  /home/node/app/dist/server.js /home/node/index.js
RUN npm i

EXPOSE ${npm_package_config_port}

CMD ["node", "/home/node/index.js"]

