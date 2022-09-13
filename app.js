const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

function display()
{
    let dbo=client.db('CHECK');
   let res = dbo.collection('products').find().toArray();
   res.then((data)=>{
        console.log(data);
   })
}

//display();
a=({"name":"TV","price":18000,"decscription":"new","condition":"superb"});
function insert()
{
    let dbo=client.db("CHECK")
    dbo.collection("products").insertOne(a);
}

insert();

function delet()
{
    let dbo=client.db("CHECK")
    dbo.collection("products").deleteOne({"name":"AirCondtioner"});
}

//delet();