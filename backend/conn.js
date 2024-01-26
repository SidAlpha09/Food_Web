const {MongoClient}=require("mongodb")
const db="mongodb+srv://food-app:a1234567b@food-app.dtu5ywc.mongodb.net/food-app-db?retryWrites=true&w=majority";
const client=new MongoClient(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

let _db;
module.export={
    connectToServer:async function(callback){
        try{
            await client.connect();
        }
        catch(e){
            console.error(e)
        }

        _db=client.db("food-app-db");
        return (_db===undefined? false:true)
    },
    getDb:function(){
        return _db
    }
}