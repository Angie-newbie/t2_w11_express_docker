const e = require("express");
const express = require("express");
const mongoose = require("mongoose");


//require amd immediatlu ise vs and save as variable
// const dotenv = require("dotenv")
require("dotenv").config();

console.log("PORT IS "+ process.env.PORT);

let{
    PORT,
    NODE_ENV,
    DATABASE_URL
} = process.env;
console.log(PORT, NODE_ENV, DATABASE_URL)

if (PORT == undefined){
    PORT = 3000
}

const app = express();

app.get("/", (request, response)=>{
    console.log("Home page")
    response.json({
        message:"Hello"
    })
})

async function main(){
    await mongoose.connect(DATABASE_URL)
    console.log ("database connected ")

    app.listen(PORT, () => {
        console.log("server is listening on http://localhost:" + PORT)
    })
}

// mongoose.connect("database url goes here").then (()=>{
//      app.listen(3000, () => {
//      console.log("server is listening on port 3000")
//  })
// })

// const app = express();
// app.listen(3000, () => {
//     console.log("server is listening on port 3000")
// })