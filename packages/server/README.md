# Server
Here we have a node.js project using [express](https://expressjs.com/) and [TypeORM](https://typeorm.io/).
I chose these technologies because I've worked with them a lot. The server was created with a structure to easily
create many plateaus and many rovers. I was creating thinking on scalability.
Unfortunately I had no time to do that on front-end. And also I had no time to implement integration tests

## Structure
### Database
I chose to work with MySQL and I used it to store the rover movements and other information such as:
- rover start position
- rover final position
- plateau info: x, y
- movements done

you can see the database diagram with the `mars_rover_db.dot` in some graph viz
- https://dreampuf.github.io/GraphvizOnline/

### Server
- `__tests__` : folder with unit tests
- `config`: folder with the project configuration
- `routes & controllers`: folders used for make the api routing
- `middlewares`: an aux folder for router e controller. It has some access rules, like CORS and authorization. In that case, only CORS
- `databases`: folder with database connections and related to that
- `databases/typeorm`: the connection established with typeorm and ORM classes. See more: [typeorm](https://typeorm.io/)
- `usecases`: here we have the core of the project with the business rules and domain
- `services`: functions and classes to help the `usecases` folder
- `utils`: auxiliary functions
- `types`: interfaces used globally

## APIs
This project has 2 main REST apis:
`/rover` & `/plateau`

### rover
With two routes we can
- `init`: (land) a rover 
- `move`: move the rover through the plateau

### plateau
- `init`: instantiate a plateau with the x, y right-upper coords


## Tests
It was implemented unit tests using jest. You can it also, with:
```shell
cd packages/server && npm run test
```

## PS
To see the rover movements, you can query on movements table on database with the proper relations