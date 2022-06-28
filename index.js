const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Akanksha:Maniyari@cluster0.0muw2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async (err) => {
    if(!err){
        console.log("connection")
        const collection = client.db("test").collection("devices");
        // const result = await  collection.insertMany([
        //     {name : "ram"},
        //     {name : "shyam"},
        //     {name : "mohan"},
        //     {name : "sunidhi"}
        // ])

        // const result = await collection.find().toArray()
        const result = await collection.find().toArray()
        console.log(result)
    }else{
        console.log("failed")
    }
  // perform actions on the collection object
//   client.close();
});
