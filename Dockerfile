FROM node:10-slim
WORKDIR /app
ADD . /app
CMD node server.js
