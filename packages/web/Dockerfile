FROM node:18.12.1 AS builder

WORKDIR /opt/build

COPY packages/web/package.json ./
RUN npm install

COPY packages/web /opt/build/

ARG REACT_APP_ENV
ARG REACT_APP_API_HOST
ARG REACT_APP_API_PORT

ENV REACT_APP_ENV=${REACT_APP_ENV}
ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}
ENV REACT_APP_API_PORT=${REACT_APP_API_PORT}

RUN npm run build

FROM node:18.12.1 AS app

WORKDIR /opt/mars-rovers-web

COPY --from=builder /opt/build /opt/mars-rovers-web
RUN npm install -g serve

WORKDIR /opt/mars-rovers-web

USER node

CMD ["serve", "-s", "build"]
