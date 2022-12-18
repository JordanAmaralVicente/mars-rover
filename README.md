# Mars Rovers
A squad of robotics rovers are be landed on Mars.
The robots will land in a rectangular plateau, so then
they will receive a series of commands to explore the land

## How to run the project
First of all you wil need to install docker, docker-compose and node.js
on your machine. You can learn more about that in the following links:
- [docker](https://www.docker.com/)
- [docker-compose](https://github.com/docker/compose)
- [node.js](https://nodejs.org/en/)

Once time you have installed them. you can run the commands bellow in you terminal

> all commands should be executed in the root folder 

### Installing the dependencies

Downloading the server dependencies:
```shell
cd packages/server && npm install
```

<br />

Downloading the front-end dependencies:
```shell
cd packages/web && npm install
```


### Running the project
It will be good if you open 3 tabs in the terminal and execute the commands separately.
It must be executed in the order:


Run the docker container with the database:
```shell
cd docker && docker-compose up
```

Run the server once the database is ready to establish connections:
```shell
npm run start:dev:server
```

Finally, run the front-end:
```shell
npm run start:dev:web
```


## What should you do now
You can access the website with the following link:
- http://localhost:3000/

## Packages:
You can read more about the packages and the structure that I used the following README's:

- [server](./packages/server/README.md)
- [web](./packages/server/README.md)

