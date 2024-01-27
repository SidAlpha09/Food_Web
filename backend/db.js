const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    const connected = await mongoose.connect(
      "mongodb+srv://food-app:a1234567b@food-app.dtu5ywc.mongodb.net/food-app-db?retryWrites=true&w=majority"
    );
    if (connected) {
      console.log("connection successfull");

      //for fetching the food data from db
      const fetched_data = await mongoose.connection.db
        .collection("food_items");
        
        let data=await fetched_data.find({})
        .toArray(function (err, data) {
          if (err) console.log("not getting the data");
          else{
           console.log(data)
          }
        })

        //for fetching category from db
      const fetched_category = await mongoose.connection.db
        .collection("category");
        
        let cat=await fetched_category.find({})
        .toArray(function (err, data) {
          if (err) console.log("not getting the data");
          else{
           console.log(data)
          }
        })
        global.food_category=cat
        global.food_items=data
        
      
      
      
      
    }
    
  } 
  
  catch (error) {
    console.log("Connection to db failed");
    process.exit(0);
  }
};

module.exports = mongoDB;
