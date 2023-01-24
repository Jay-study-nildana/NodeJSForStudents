import express from "express"
const bodyParser = require('body-parser');
import MovieHelper from "./movieHelper";
// var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const { expressjwt: jwt } = require("express-jwt");
//var jwt = require('jsonwebtoken');

	
// enable CORS using npm package
var cors = require('cors');
// app.use(cors());

/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */

const movieHelper = new MovieHelper();

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://moviedbfullstack.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'thechalakas.com',
  issuer: 'https://moviedbfullstack.us.auth0.com/',
  algorithms: ['RS256']
});

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

        this.server.use(jwtCheck);

        this.server.use(cors()); //app.use(cors());

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
    
            res.send(someRandomMovie);
        })

        //an endpoint that can search based on query.

        this.server.get('/authorized', function (req, res) {
            res.send('Secured Resource');
        });

        //Start Listening
        this.server.listen(this.port, () => {
            console.log(`${this.serverName} API server Started at http://${this.hostname}:${this.port}/`);
        })
    }
}

//EXPORT MODULE
module.exports = ExpressServer