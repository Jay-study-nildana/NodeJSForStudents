# movie db web api with auth0 security

a web api that consumes movie db web api and has auth0 security.

note : as of this typing, it simply checks for a secure token. no roles or scopes yet.

# other stuff

1. for a front end only implementation, look at, this. https://github.com/Jay-study-nildana/FrontEndForStudents/tree/main/BootstrapForStudents/Bootstrap5/MovieDBProject

# update auth0 issuer

You need to update this to match with your auth0 tenant

```
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
```

# .env file

You must create a .env file which looks like this. 

```
    LOCAL_HOST = "localhost"
    DEFAULT_PORT = "8080"
    apikey = "YOURMOVIEDBAPIKEY"
```

# API documentation

note: this endpoints won't work unless you attach a 'Bearer' token.

1. http://localhost:8080/randomstuff
    
    example output : 

    ```
        {
        "name": "Jay",
        "nameFull": "Vijayasimha BR",
        "place": "Mysore",
        "numberFavorite": "69"
        }

    ```
1. http://localhost:8080/randommovie
    
    example output : 

    ```
        {
        "id": 475557,
        "original_title": "Joker",
        "vote_count": 22035,
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure."
        }
        
    ```

# references

1. https://dmitripavlutin.com/javascript-fetch-async-await/
1. https://stackoverflow.com/questions/48708449/promise-pending-why-is-it-still-pending-how-can-i-fix-this
1. https://stackoverflow.com/questions/54950838/how-to-use-fetch-with-async-await
1. https://github.com/auth0/express-jwt/issues/48
1. https://www.cluemediator.com/how-to-enable-cors-in-node-js

# hire and get to know me

find ways to hire me, follow me and stay in touch with me.

1. https://jay-study-nildana.github.io/developerprofile/
1. https://thechalakas.com