FROM node:alpine
WORKDIR /usr/src/jobs
COPY package*.json .
RUN yarn install
COPY . .
CMD ['yarn', 'queue']
