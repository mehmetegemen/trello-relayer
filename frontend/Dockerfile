FROM node:15

WORKDIR /app

COPY . .

ARG API_URL
ARG REACT_APP_TOKEN
ARG REACT_APP_TODO_LIST_ID
ARG REACT_APP_DONE_LIST_ID

RUN touch .env
RUN echo "REACT_APP_API_URL=${API_URL}\n" >> .env 
RUN echo "REACT_APP_TOKEN=${REACT_APP_TOKEN}\n" >> .env 
RUN echo "REACT_APP_TODO_LIST_ID=${REACT_APP_TODO_LIST_ID}\n" >> .env 
RUN echo "REACT_APP_DONE_LIST_ID=${REACT_APP_DONE_LIST_ID}\n" >> .env 

ENV IP=0.0.0.0
ENV PORT=3000

RUN yarn install
RUN yarn build
RUN yarn global add live-server

CMD [ "live-server", "./build" ]