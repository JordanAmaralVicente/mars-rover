FROM node:18.12.1 AS builder

WORKDIR /opt/build

COPY packages/server/package.json ./
RUN npm install

COPY packages/server /opt/build/
RUN npm run build

FROM node:18.12.1 AS app

WORKDIR /opt/mars-rovers-server

COPY --from=builder /opt/build /opt/mars-rovers-server

WORKDIR /opt/mars-rovers-server

USER node

CMD ["node", "build/index.js"]
