# Mongo DB API CRUD Hello World

Mongo DB API CRUD Hello World

Note : if a package is missing, just install the missing package. 

For example.

```
    npm install ejs
```

Note : remember to have Postman installed. I have included a Postman collection in the repo. 

# things to do before running this

1. get the .env file ready.
1. get your mongo db, preferably, the cloud db, ready.
1. connect with mongo db compass and confirm credentials.
1. in the project, update connection string, "let connectionstring = 'mongodb://localhost:27017';"
1. npm install

if all goes as planned, try this endpoint.

http://localhost:8081/mongodb/addhero

```
    {
        "resultOfDb": {
            "acknowledged": true,
            "insertedId": "63fa168e00821f279bd65d32"
        }
    }
```

# .env file

You must create a .env file which looks like this. 

```
    LOCAL_HOST = "localhost"
    DEFAULT_PORT = "8080"
    DEFAULT_PORT2 = "8081"
    DEFAULT_PORT3 = "8082"
    DEFAULT_PORT4 = "8083"
```

# endpoints

1. http://localhost:8081/mongodb/addhero
1. http://localhost:8081/mongodb/addherogreenlantern

# Output - mongo db API

1. http://localhost:8081/mongodb/helloworld - get all the list of super heroes.
1. http://localhost:8081/mongodb/addhero - add a default hero.
1. http://localhost:8081/mongodb/updatehero - update a hero 
1. http://localhost:8081/mongodb/addherogreenlantern - for a quick add/delete combo. 
1. check even more endpoints in the included Postman collection. 

# Output - even more stuff

1. http://localhost:8081/ - a simple form without bootstrap. 
1. http://localhost:8081/about - simple about page
1. http://localhost:8081/SampleFormWithBS - simple form with bootstrap.
1. http://localhost:8081/dummycar - a simple json object without any lodash
1. http://localhost:8081/dummycarwithlodash - json with lodash.

# Output - basics

```
    npm run dev
```

note : you can modify the .env file to change port number. but please dont. keep it default and simple.

1. http://localhost:8081/ - a simple form without bootstrap. 
1. http://localhost:8081/about - simple about page
1. http://localhost:8081/SampleFormWithBS - simple form with bootstrap.
1. http://localhost:8081/dummycar - a simple json object without any lodash
1. http://localhost:8081/dummycarwithlodash - json with lodash.

# References

1. https://medium.com/projectwt/setup-a-simple-nodejs-server-with-api-endpoints-and-static-bootstrap-site-a809ebcb8e74
1. https://hevodata.com/learn/node-js-with-mongodb-crud/
1. https://www.mongodb.com/docs/compass/current/embedded-shell/
1. https://www.postman.com/downloads/

# hire and get to know me

find ways to hire me, follow me and stay in touch with me.

1. https://jay-study-nildana.github.io/developerprofile/
1. https://thechalakas.com