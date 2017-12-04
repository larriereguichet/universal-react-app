FROM node:alpine

ENV NPM_CONFIG_LOGLEVEL warn
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

COPY package.json package-lock.json /home/node/app/

WORKDIR /home/node/app
RUN npm install

EXPOSE 3000
USER node

CMD ["node","index.js"]
