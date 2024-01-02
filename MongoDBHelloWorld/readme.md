# Mongo DB Hello World

just some stuff for getting started with mongo db.

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

# grab some sample databases.

Note : I have put a copy here, in the repository as well. But, you should try to get it from the linked sources or any other source. 

1. https://gist.github.com/aceakash/ec2820018e8a2a44 - restaurant database. 
1. http://insideairbnb.com/get-the-data/ - airbnb data, much more massive. 

# Hire Me

I work as a full time freelance coding tutor. Hire me at [UpWork](https://www.upwork.com/fl/vijayasimhabr) or [Fiverr](https://www.fiverr.com/jay_codeguy). 

# Stay in touch

1. Jay's [Developer Profile](https://jay-study-nildana.github.io/developerprofile)
1. Jay's [Personal Site](https://stories.thechalakas.com/)

# General Note

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.