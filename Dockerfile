FROM node:latest

COPY package.json .

COPY yarn.lock .

COPY src .

COPY . .

RUN yarn

EXPOSE 8080

ENTRYPOINT ["yarn", "start"]