import express from "express"
// const bodyParser = require('body-parser'); //old way of importing.
import bodyParser from "body-parser"; //ES 6
import path from "path"; //for loading files from a path. serve bootstrap site for example.
import lodash, { some } from "lodash";
import { MongoClient } from "mongodb";
import cors from "cors";

/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */

let connectionstring = '';
let cloudconnectionstring2 = '';

class ExpressServer {
  constructor(hostname = process.env.LOCAL_HOST,
    port = process.env.DEFAULT_PORT2,
    cloudconnectionstring = process.env.cloudconnectionstring,
    connectionstring2 = process.env.connectionstring
  ) {
    this.serverName = 'Express Server';
    this.hostname = hostname;
    this.port = port;

    //update connectionstring from env variables.
    cloudconnectionstring2 = cloudconnectionstring;
    connectionstring = connectionstring2;

    //Auto Start Server
    this.initServer()

    //const cl = new MongoClient("mongodb://localhost:27017");
    //this.connectionstring = 'mongodb://localhost:27017';


  }

  initServer = () => {
    //Create Server
    this.server = express()

    //setup cors
    this.server.use(cors());

    //setup the view engine. for showing views on the website
    //by default, ejs is looking for a folder called 'views' in the root of the folder
    console.log(`${path.join(__dirname)}`);
    this.server.set("view engine", "ejs");

    // for parsing application/json
    this.server.use(bodyParser.json());
    // for parsing application/x-www-form-urlencoded - form data
    this.server.use(bodyParser.urlencoded({ extended: true }));

    // this.server.get('/user', (req, res)=> {
    //   res.send('Got a GET request at /user')
    //   // next()
    // })

    this.server.get('/dummycar', (req, res) => {
      const somecar = {
        "name": "Mach 5",
        "driver": "Speed Racer"
      }
      res.send(somecar)
      // next()
    })

    this.server.get('/dummycarwithlodash', (req, res) => {
      const somecar = {
        "name": "Mach 5",
        "driver": "Speed Racer",
        "lodash": "yes"
      }

      const someEmptyString = lodash.stubString();
      console.log(someEmptyString);

      const getLodAshDriver = lodash.get(somecar, 'driver');
      console.log(getLodAshDriver);

      const getLodAshCompany = lodash.get(somecar, 'company', "default company");
      console.log(getLodAshCompany);

      const getLodAshCompany2 = lodash.get(somecar, 'company');
      console.log(getLodAshCompany2);

      const somejeep = {
        "name": "Moutain Jeep",
        "driver": "Duke Nukem",
        "lodash": "yes"
      }

      console.log(somejeep);

      //update a value

      lodash.set(somejeep, 'driver', "Duke Nukema!!!")
      lodash.set(somejeep, 'updated', "changed the name")

      console.log(somejeep);

      let responseObject = {
        somecar: somecar,
        someEmptyString: someEmptyString,
        getLodAshDriver: getLodAshDriver,
        getLodAshCompany: getLodAshCompany,
        getLodAshCompany2: getLodAshCompany2,
        somejeep: somejeep
      }

      res.send(responseObject)
      // next()
    })

    // this.server.put('/user', (req, res)=> {
    //   res.send('Got a PUT request at /user')
    //   // next()
    // })

    // this.server.delete('/user', (req, res)=> {
    //   res.send('Got a DELETE request at /user')
    //   // next()
    // })

    // this.server.post('/', (req, res, next) => {
    //   console.log(req);
    //   // next()
    //   });

    // this.server.get('/', (req, res)=> {
    //   res.send('Hello World from EXPRESS SERVER!')
    //   // next()
    // })

    this.server.get('/', (req, res) => {
      //display a simple form.
      res.render("SampleForm");
    })

    this.server.post('/saveData', (req, res) => {
      //log information sent through the form.
      console.log(`Fullname : ${req.body.fullname}`);
      console.log(`Email : ${req.body.email}`);

      const PersonDetails = {
        fullname: req.body.fullname,
        email: req.body.email
      }

      res.render('FormDone', {
        PersonDetails: PersonDetails
      });
    })

    this.server.get('/SampleFormWithBS', (req, res) => {
      //display a simple form.
      res.render("pages/SampleForm");
    })

    this.server.post('/saveDataWithBS', (req, res) => {
      //log information sent through the form.
      console.log(`Fullname : ${req.body.fullname}`);
      console.log(`Email : ${req.body.email}`);

      const PersonDetails = {
        fullname: req.body.fullname,
        email: req.body.email
      }

      res.render('pages/FormDone', {
        PersonDetails: PersonDetails
      });
    })

    // about page
    this.server.get('/about', function (req, res) {
      res.render('pages/about');
    });

    //here let's start putting some mongo db stuff
    this.server.get('/mongodb/helloworld', (req, res) => {

      async function run() {
        let cl = new MongoClient(connectionstring);
        try {
          await cl.connect();
          const dbs = cl.db("superheroes");
          const coll = dbs.collection("heroes");

          const cur = coll.find({}, {});

          let items = [];
          await cur.forEach(function (doc) {
            items.push(doc);
          });
          console.log(items);
          // res.end(JSON.stringify(items));
          let responseObject = {
            items: items
          }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })

    //add some super hero
    this.server.get('/mongodb/addhero', (req, res) => {

      async function run() {
        let cl = new MongoClient(connectionstring);
        try {
          await cl.connect();
          const dbs = cl.db("superheroes");
          const coll = dbs.collection("heroes");

          //const rest = await coll.insertOne({"quote":"This is my quote."});
          //db.heroes.insertOne({hero:"Joker",name:"Unknown"})
          let resultOfDb = await coll.insertOne({ hero: "Joker", name: "Unknown" });

          console.log(resultOfDb);
          let responseObject = {
            resultOfDb: resultOfDb
          }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })

    //update a hero
    this.server.get('/mongodb/updatehero', (req, res) => {

      async function run() {
        let cl = new MongoClient(connectionstring);
        try {
          await cl.connect();
          const dbs = cl.db("superheroes");
          const coll = dbs.collection("heroes");

          //const rest = await coll.insertOne({"quote":"This is my quote."});
          //db.heroes.insertOne({hero:"Joker",name:"Unknown"})
          let resultOfDb = await coll.updateOne(
            { hero: "Catwoman" },
            { $set: { name: "Selina Kyle" } }
          );

          console.log(resultOfDb);
          let responseObject = {
            resultOfDb: resultOfDb
          }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })

    //add and delete hero
    this.server.get('/mongodb/addherogreenlantern', (req, res) => {

      async function run() {
        let cl = new MongoClient(connectionstring);
        try {
          await cl.connect();
          const dbs = cl.db("superheroes");
          const coll = dbs.collection("heroes");

          //const rest = await coll.insertOne({"quote":"This is my quote."});
          //db.heroes.insertOne({hero:"Joker",name:"Unknown"})
          let resultOfDb = await coll.insertOne({ hero: "Green Lantern", name: "Hal Jordan" });

          console.log(resultOfDb);
          let responseObject = {
            resultOfDb: resultOfDb
          }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })

    this.server.get('/mongodb/deleteherogreenlantern', (req, res) => {
      console.log('delete with GET option')
      async function run() {
        let cl = new MongoClient(connectionstring);
        try {
          await cl.connect();
          const dbs = cl.db("superheroes");
          const coll = dbs.collection("heroes");

          //const rest = await coll.insertOne({"quote":"This is my quote."});
          //db.heroes.insertOne({hero:"Joker",name:"Unknown"})
          let resultOfDb = await coll.deleteOne({ hero: "Green Lantern" });

          console.log(resultOfDb);
          let responseObject = {
            resultOfDb: resultOfDb
          }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })

    this.server.post('/mongodb/addHeroWithPost', (req, res) => {
      let tempHero = {
        hero: req.body.hero,
        name: req.body.name
      }

      console.log(`recieved hero is `);
      console.log(tempHero);

      async function run() {
        let cl = new MongoClient(connectionstring);
        try {
          await cl.connect();
          const dbs = cl.db("superheroes");
          const coll = dbs.collection("heroes");
          let resultOfDb = await coll.insertOne(tempHero);

          console.log(resultOfDb);
          let responseObject = {
            resultOfDb: resultOfDb
          }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })

    this.server.get('/mongodb/returnsomemovieswithoutindexing', (req, res) => {
      async function run() {
        let cl = new MongoClient(cloudconnectionstring2);
        try {
          await cl.connect();
          const dbs = cl.db("sample_mflix");
          const coll = dbs.collection("movies");
          // query for movies that have a runtime less than
          const query = { runtime: { $lt: 100 } };
          const options = {

            // sort returned documents in ascending order by title (A->Z)

            sort: { title: 1 },

            // Include only the `title` and `imdb` fields in each returned document

            projection: { _id: 0, title: 1, imdb: 1 },

          };
          let numberOfMovies = 10;
          //let resultOfDb = coll.find(query, options).limit(numberOfMovies);
          let resultOfDb = coll.find({}, {}).limit(numberOfMovies);
          // print a message if no documents were found

          if ((await resultOfDb.count()) === 0) {

            console.log("No documents found!");

          }

          // replace console.dir with your callback to access individual elements

          let responseObject = {
            movies: []
          }

          await resultOfDb.forEach(function (x) {
            responseObject.movies.push(x);
          });

          console.log(responseObject);

          res.send(responseObject);

          // await resultOfDb.forEach(console.dir);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })    

    //note : you need to enable 'indexes' for this to work. 
    this.server.get('/mongodb/returnsomemovies', (req, res) => {
      async function run() {
        let cl = new MongoClient(cloudconnectionstring2);
        try {
          await cl.connect();
          const dbs = cl.db("sample_mflix");
          const coll = dbs.collection("movies");
          // query for movies that have a runtime less than
          const query = { runtime: { $lt: 100 } };
          const options = {

            // sort returned documents in ascending order by title (A->Z)

            sort: { title: 1 },

            // Include only the `title` and `imdb` fields in each returned document

            projection: { _id: 0, title: 1, imdb: 1 },

          };
          let numberOfMovies = 10;
          let resultOfDb = coll.find(query, options).limit(numberOfMovies);
          // print a message if no documents were found

          if ((await resultOfDb.count()) === 0) {

            console.log("No documents found!");

          }

          // replace console.dir with your callback to access individual elements

          let responseObject = {
            movies: []
          }

          await resultOfDb.forEach(function (x) {
            responseObject.movies.push(x);
          });

          console.log(responseObject);

          res.send(responseObject);

          // await resultOfDb.forEach(console.dir);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })

    //note : you need to enable 'indexes' for this to work. 
    this.server.post('/mongodb/searchformovie', (req, res) => {
      let searchterms = {
        termone: req.body.termone
      }

      const query = {
        $text: {
          $search: searchterms.termone
        }
      };
      const projection = { plot: 1 };
      console.log(query);
      async function run() {
        let cl = new MongoClient(cloudconnectionstring2);
        try {
          await cl.connect();
          const dbs = cl.db("sample_mflix");
          const coll = dbs.collection("movies");
          const indexes = await coll.indexes();
          console.log(indexes);
          let resultOfDb = coll.find(query).project(projection);
          //let resultOfDb = await coll.findOne();

          // print a message if no documents were found

          if ((await resultOfDb.count()) === 0) {

            console.log("No documents found!");

          }

          // replace console.dir with your callback to access individual elements
          let responseObject = {
            movies: []
          }

          await resultOfDb.forEach(console.dir);
          await resultOfDb.rewind();
          await resultOfDb.forEach(function (x) {
            responseObject.movies.push(x);
          });

          console.log(responseObject);
          // await resultOfDb.rewind();
          // responseObject.movies = await resultOfDb.toArray();
          // console.log(responseObject);
          // await resultOfDb.rewind();
          // console.log("async");
          // for await (const doc of resultOfDb) {
          //   console.log(doc);
          // }          


          //resultOfDb.forEach(console.dir);
          // let responseObject = {
          //   resultOfDb : resultOfDb
          // }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })



    this.server.get('/mongodb/updateheroWithPost', (req, res) => {

      let tempHero = {
        hero: req.body.hero,
        name: req.body.name
      }

      console.log(`recieved hero is `);
      console.log(tempHero);

      async function run() {
        let cl = new MongoClient(connectionstring);
        try {
          await cl.connect();
          const dbs = cl.db("superheroes");
          const coll = dbs.collection("heroes");

          //const rest = await coll.insertOne({"quote":"This is my quote."});
          //db.heroes.insertOne({hero:"Joker",name:"Unknown"})
          let resultOfDb = await coll.updateOne(
            { hero: tempHero.hero },
            { $set: { name: tempHero.name } }
          );

          console.log(resultOfDb);
          let responseObject = {
            resultOfDb: resultOfDb
          }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })

    this.server.delete('/mongodb/deleteherogreenlantern', (req, res) => {
      console.log('delete with DEL option')
      async function run() {
        let cl = new MongoClient(connectionstring);
        try {
          await cl.connect();
          const dbs = cl.db("superheroes");
          const coll = dbs.collection("heroes");

          //const rest = await coll.insertOne({"quote":"This is my quote."});
          //db.heroes.insertOne({hero:"Joker",name:"Unknown"})
          let resultOfDb = await coll.deleteOne({ hero: "Green Lantern" });

          console.log(resultOfDb);
          let responseObject = {
            resultOfDb: resultOfDb
          }
          res.send(responseObject);

        } catch (err) {
          console.warn("ERROR: " + err);
          if (errCallback) errCallback(err);
        } finally {
          await cl.close();
        }
      }
      run().catch(console.dir);
    })


    //Start Listening
    this.server.listen(this.port, (error) => {
      if (error)
        throw error;
      console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
      console.log(`the connection string is ${this.cloudconnectionstring}`)
    })
  }
}

//EXPORT MODULE
module.exports = ExpressServer