class MovieHelper {

    someRandomStuff = () => {
        let randomStuff = {
            "name": "Jay",
            "nameFull": "Vijayasimha BR",
            "place": "Mysore",
            "numberFavorite": "69",
        }

        return randomStuff;
    }

    someRandomMovie = async (movieAPIkey) => {

        let randommovietitle = this.searchforrandommovie();

        console.log(randommovietitle);

        let query = randommovietitle;
        let movieDataRaw = await this.LetsCallAPIFetchMovieDBWithQuery(movieAPIkey, query).then(movies => {
            movies; // fetched movies
            //console.log(`returned to await 1`);
            //console.log(movies);
            //console.log(`returned to await 2`);
            return movies;
        });;

        //console.log(movieDataRaw);

        return movieDataRaw;
    }

    //take the raw movie object and give it a hair cut
    //movieHelper.preparedMovieObject(someRandomObjectRAW);
    preparedMovieObject = (someRandomObjectRAW) => {
        console.log(`entered preparedMovieObject`);
        //console.log(someRandomObjectRAW);

        let chosenArrayIndex = 0; //right now, just picking up the first movie

        let movieObject = {

            id: someRandomObjectRAW.results[chosenArrayIndex].id,
            original_title: someRandomObjectRAW.results[chosenArrayIndex].original_title,
            vote_count: someRandomObjectRAW.results[chosenArrayIndex].vote_count,
            overview: someRandomObjectRAW.results[chosenArrayIndex].overview,

        }

        //console.log(movieObject);
        return movieObject;
    }

    searchforrandommovie = () => {
        let listOfRandomMovieStuff = [
            "basic",
            "baywatch",
            "indiana jones",
            "phantom",
            "mission impossible",
            "joker",
            "batman",
            "tomb raider",
        ];

        // Returns a random integer from 0 to 9:

        let randomNumber = Math.floor(Math.random() * listOfRandomMovieStuff.length);

        let inputmoviequery = listOfRandomMovieStuff[randomNumber];

        return inputmoviequery;

    }

    LetsCallAPIFetchMovieDBWithQuery = async (movieAPIkey, query) => {
        console.log(`Entering  LetsCallAPIFetchMovieDBWithQuery`);

        //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=avengers&page=1&include_adult=false
        let baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${movieAPIkey}`;
        let extraString = `&language=en-US&query=${query}&page=1&include_adult=false`;

        const response = await fetch(baseURL + extraString);
        const movies = await response.json();
        return movies;
        //old code from front end
        //waits for the api to resolve and returns a response
        // .then((response) => response.json()) //convert response to json, wait for conversion to happen
        // .then((data) => {
        //     //wait for the data to arrive as json
        //     console.log(`Recieved stuff using the fetch API`);
        //     //console.log(data); //do whatever you want with it.
        //     return data;
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        console.log(`Leaving  LetsCallAPIFetchMovieDBWithQuery`);
    }
}

module.exports = MovieHelper