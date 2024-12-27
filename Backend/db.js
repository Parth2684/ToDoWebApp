require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB")
}).catch(error =>{
    console.error("Connection To MongoDB Failed", error)
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}