import express from "express"
const bodyParser = require('body-parser');
import MovieHelper from "./movieHelper";

/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */

const movieHelper = new MovieHelper();

class ExpressServer {
    constructor(hostname = process.env.LOCAL_HOST, port = process.env.DEFAULT_PORT,
        apikey = process.env.apikey) {
        this.serverName = 'Express Server';
        this.hostname = hostname;
        this.port = port;
        this.apikey = apikey;

        //Auto Start Server
        this.initServer()

    }

    initServer = () => {
        //Create Server
        this.server = express()

        this.server.use(bodyParser.json()); // for parsing application/json
        this.server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

        // this.server.get('/dummycar', (req, res) => {
        //     const somecar = {
        //         "name": "Mach 5",
        //         "driver": "Speed Racer"
        //     }
        //     res.send(somecar)
        //     // next()
        // })

        // this.server.put('/user', (req, res) => {
        //     res.send('Got a PUT request at /user')
        //     // next()
        // })

        // this.server.delete('/user', (req, res) => {
        //     res.send('Got a DELETE request at /user')
        //     // next()
        // })

        // this.server.post('/', (req, res, next) => {
        //     console.log(req);
        //     res.send('post recieved.')
        //     //next()
        // });

        // this.server.post('/addtwonumbers', (req, res, next) => {
        //     console.log(req.body);
        //     let result = req.body.firstnumber + req.body.secondnumber;
        //     console.log(result);
        //     let responseobject = {
        //         firstnumber: req.body.firstnumber,
        //         secondnumber: req.body.secondnumber,
        //         result: result
        //     }
        //     console.log(responseobject);
        //     res.send(responseobject);
        //     //next()
        // });

        this.server.get('/', (req, res) => {
            res.send('Hello World from EXPRESS SERVER!')
            // next()
        })

        this.server.get('/randomstuff', (req, res) => {


            const someRandomObject = movieHelper.someRandomStuff();

            res.send(someRandomObject)
            // next()
        })

        this.server.get('/randommovie', async (req, res) => {

            let movieAPIkey = this.apikey;
            const someRandomObjectRAW = await movieHelper.someRandomMovie(movieAPIkey);
            console.log(`returned to randommovie get`);
            //console.log(someRandomObjectRAW);
            let someRandomMovie = movieHelper.preparedMovieObject(someRandomObjectRAW);
            //res.send({ "status": "nothing to return yet" });
            //TODO : get some images using the movie id.
            //TODO : get movie details using the movie id.
            res.send(someRandomMovie);
        })

        //an endpoint that can search based on query.

        //Start Listening
        this.server.listen(this.port, () => {
            console.log(`${this.serverName} API server Started at http://${this.hostname}:${this.port}/`);
        })
    }
}

//EXPORT MODULE
module.exports = ExpressServer