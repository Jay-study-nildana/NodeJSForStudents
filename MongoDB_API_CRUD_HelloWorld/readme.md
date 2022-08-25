# Mongo DB API CRUD Hello World

Mongo DB API CRUD Hello World

note : remember to have Postman installed. I have included a Postman collection in the repo. 

note : learn how to use the mongodb db driver for node js, here : https://www.mongodb.com/docs/drivers/node/current/

# .env file

You must create a .env file which looks like this. Note that this project uses both localhost and cloud mongo db databases. make sure both are ready. 

```
    LOCAL_HOST = "localhost"
    DEFAULT_PORT = "8080"
    DEFAULT_PORT2 = "8081"
    DEFAULT_PORT3 = "8082"
    DEFAULT_PORT4 = "8083"
    cloudconnectionstring = "mongodb+srv://username:password@cluster0.s6bfyhr.mongodb.net"
    connectionstring = "mongodb://localhost:27017"
```

# Cross-Origin Request Blocked

You will hundred percent get this error as I am asking you to run both the React JS project and the Mongo DB API Server on the same computer : localhost. 

So, make your sure your API server has cors configured.

```
    npm install cors
```

then, enable it. 

```
    //setup cors
    this.server.use(cors());
```

# Output - mongo db API

1. http://localhost:8081/mongodb/helloworld - get all the list of super heroes.
1. http://localhost:8081/mongodb/addhero - add a default hero.
1. http://localhost:8081/mongodb/updatehero - update a hero 
1. http://localhost:8081/mongodb/addherogreenlantern - for a quick add/delete combo. 
1. check even more endpoints in the included Postman collection. 

# Output - basics

```
    npm run dev
```

# connection string

This API server uses both locally running mongo db. And alos mongo db on mongo cloud. 

# References : mongodb driver for nodejs

1. https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/
1. https://www.mongodb.com/docs/drivers/node/current/fundamentals/indexes/#text-indexes
1. https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/cursor/

# References

1. https://medium.com/projectwt/setup-a-simple-nodejs-server-with-api-endpoints-and-static-bootstrap-site-a809ebcb8e74
1. https://hevodata.com/learn/node-js-with-mongodb-crud/
1. https://www.mongodb.com/docs/compass/current/embedded-shell/
1. https://www.postman.com/downloads/
1. https://github.com/expressjs/cors

# errors

Note : if a package is missing, just install the missing package. 

For example.

```
    npm install ejs
```

# Hire Me

I work as a full time freelance coding tutor. Hire me at [UpWork](https://www.upwork.com/fl/vijayasimhabr) or [Fiverr](https://www.fiverr.com/jay_codeguy). 

# Hobbies

I try to maintain a few hobbies.

1. Podcasting. You can listen to my [podcast here](https://stories.thechalakas.com/listen-to-podcast/).
1. Photography. You can see my photography on [Unsplash here](https://unsplash.com/@jay_neeruhaaku).
1. Digital Photorealism 3D Art and Arch Viz. You can see my work on this on [Adobe Behance](https://www.behance.net/vijayasimhabr).
1. Writing and Blogging. You can read my blogs. I have many medium Publications. [Read them here](https://medium.com/@vijayasimhabr).

# important note 

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

I can be reached through my website - [Jay's Developer Profile](https://jay-study-nildana.github.io/developerprofile)