const mongoose=require('mongoose')

const {Schema} =mongoose;

//Here schema is used for validation like we are doing here to make a signup page
const UserSchema= new Schema ({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});
//we will perform crud operation using model
module.exports = mongoose.model('user',UserSchema)