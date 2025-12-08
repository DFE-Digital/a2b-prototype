FROM node:18-bullseye

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["dev"]
