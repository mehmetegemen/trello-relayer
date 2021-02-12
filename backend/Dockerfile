FROM node:15

WORKDIR /app

COPY . .

ENV IP=0.0.0.0
ENV PORT=4000
ENV DEBUG=trello-relayer
ENV TRELLO_API=https://trello.com/1
ENV NODE_ENV=production
ENV NODE_PATH=src

RUN npm install
RUN npm install pm2 -g

CMD [ "pm2-runtime", "./src/server.js" ]

EXPOSE 4000
