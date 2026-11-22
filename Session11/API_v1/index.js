const express = require("express")
const mysql = require("connection")
const bodyParser = require("body-parser");

let app = express()
app.use(bodyParser.json()); //Middleware: convert incoming data into json





app.listen(3000,()=>{
    console.log("Application is running in port 3000")
})
