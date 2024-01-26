const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    const connected=await mongoose.connect(
      "mongodb+srv://food-app:a1234567b@food-app.dtu5ywc.mongodb.net/food-app-db?retryWrites=true&w=majority");
    if(connected){
        const fetched_data = await mongoose.connection.db.collection(
            "food_items"
          ).find({}).toArray(function(err,data){
            if(err) console.log(err)
            else console.log(data)
          });
          console.log('connection successfull')
          //console.log(fetched_data)
              
              
            //   fetched_data.find({}).toArray(function (err, data) {
            //     if (err) console.log(err);
            //     else {
            //       console.log(data);
            //     }
            //   });
            }
          }
     
catch (error) {
    console.log("Connection to db failed");
    process.exit(0);
  }
};

module.exports = mongoDB;
