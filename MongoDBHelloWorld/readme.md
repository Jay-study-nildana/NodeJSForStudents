# Mongo DB Hello World

just some stuff for getting started with mongo db.

Note : once you have tried some things with local json file and locally created databases, start using mongo db cloud. 

Just login with your github account and go crazy. 

Note : www.mongodbtutorial.org, has some excellent tutorials and sample code.

# installation order

1. first install the mongo db local server. 
1. second install the mongo shell 
1. third install the compass.

Then, import a sample database. 

For example, the include, 'restaurants-dataset.json' is a good place to start.

# quick commands - for the mongosh shell in command line.

```
    //switch or create 
    use superheroes
    //insert or create an item
    db.heroes.insertOne({hero:"Batman",name:"Bruce Wayne"})
    db.heroes.insertOne({hero:"Superman",name:"Clark Kent"})
    //here, the name is purposefully misplaced. we will update it later.
    db.heroes.insertOne({hero:"Catwoman",name:"Selina Kond"})
    //here, this is a villain. we will delete it later.
    db.heroes.insertOne({hero:"Joker",name:"Unknown"})
    //get one item
    db.heroes.findOne()
    //get all in a collection
    db.heroes.find()
    db.code.find().pretty()
    //update selina kyle's wrong name
    db.heroes.updateOne(
        { hero: "Catwoman"}, 
        { $set: { name: "Selina Kyle" }}
    )   
    //let's delete Joker. he is not a hero.
    db.heroes.deleteOne({hero:"Joker"}) 

    //see all tables 
    show collections
```

# some more commands 

```
    //find specific restaurant with restaurant id 
    db.heroes.find({restaurant_id: "40356018"})
    //find specific object with object id 
    db.heroes.find({_id: ObjectId("630741000cbfe46c9fae6b92")})
    //find all restaurants who are in Brooklyn
    db.heroes.find({ borough: 'Brooklyn'})
    //find all restaurants who are in Brooklyn, and specific columns
    //remember 1 means show. 0 means dont show.
    db.heroes.find({ borough: 'Brooklyn'},{borough:1,name:1,_id:0})
    
    //use regex to get all matching things. 
    //find all restaurants which have the letters 'rook' anywhere. 
    db.heroes.find({borough: /rook/})
    //find all restaurants where name is biriyani
    db.heroes.find({name: /biriyani/})
    //find all restaurants where name is india
    db.heroes.find({name: /india/})
    //find all restaurants where name is kitchen
    db.heroes.find({name: /kitchen/})    
```
# set of products

```
db.products.insertMany([
    { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
    { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
    { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
    { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
    { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
 ])
```

# mongo db cloud 

1. Login with your GitHub Account. 
1. Create an Organization. 
1. Create a Project. 
1. Create a cluster (your database)
1. Then, load up the sample dataset. (this will take like 5 to 25 minutes)
1. Connect from MongoDB Compass to this cluster.get connection string from mongod db cloud dashboard.
1. start playing around. 

note : remember to create 'index' to allow for super fast 'text' searches.

# mongo db : sample_mflix database 

some queries for testing things. 

```
    use sample_mflix
    db.movies.find()
    db.movies.find({title: "Blacksmith Scene"})
    db.movies.find(
            {
                title: "Blacksmith Scene"
            }
        )
    db.movies.find({ title: "Blacksmith Scene"}
                    ,{
                        runtime:1,
                        countries:1,
                        awards:1,
                        year:1,
                        _id:0
                    })
```

# General Notes.

1. Use mongosh, of course, to practice query stuff.
1. Also, use the Mongo Compass software, for data visualization and such. 
1. Then, once you got some basic CRUD working, explore further with https://www.mongodbtutorial.org/mongodb-crud/

# References

1. https://www.mongodbtutorial.org/
1. https://www.mongodbtutorial.org/getting-started/install-mongodb/
1. https://www.mongodb.com/try/download/community
1. https://www.mongodbtutorial.org/getting-started/mongodb-basics/
1. https://www.mongodb.com/docs/mongodb-shell/
1. https://www.mongodb.com/try/download/shell?jmp=docs
1. https://www.mongodbtutorial.org/getting-started/mongodb-data-types/
1. https://www.mongodbtutorial.org/mongodb-crud/
1. https://www.mongodb.com/products/compass

# References Part Two 

1. https://stackoverflow.com/questions/32898139/partial-string-matching-in-mongodb
1. https://stackoverflow.com/questions/3305561/how-to-query-mongodb-with-like
1. https://www.geeksforgeeks.org/search-text-in-mongodb/

# grab some sample databases.

Note : I have put a copy here, in the repository as well. But, you should try to get it from the linked sources or any other source. 

1. https://gist.github.com/aceakash/ec2820018e8a2a44 - restaurant database. 
1. http://insideairbnb.com/get-the-data/ - airbnb data, much more massive. 

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