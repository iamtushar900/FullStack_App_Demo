const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb://127.0.1:27017/JS_Campus")
        console.log("DB IS Connected");
    }catch(err){
        console.log("something went wrong");
    }
}
module.exports = connectDB