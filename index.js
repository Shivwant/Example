// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // async function getData() {
// //     let result = await client.connect();
// //     let db = result.db('CHECK');
// //     let collection = db.collection('products');
// //     let res = await collection.find({}).toArray()
// //     console.log(res);
// // }

// // getData();

// // function display()
// // {
// //     let dbo=client.db('CHECK');
// //    let res = dbo.collection('products').find().toArray();
// //    res.then((data)=>{
// //         console.log(data);
// //    })
// // }

// // display();

// function insert()
// {
//     let dbo=client.db("CHECK")
//     dbo.collection("products").insertOne({"name":"TV","price":14000,"description":"new","condition":"verygood"});
// }

// insert();

// // function dele()
// // {
// //     let dbo=client.db("CHECK")
// //     dbo.collection("products").deleteOne({"name":"TV"});
// // }

// // dele();