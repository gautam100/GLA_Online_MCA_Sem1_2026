const mysql = require("mysql2")

const connectionString = ({
    host: "localhost",
    user: "root",
    password: "Gautamdev2025",//Enter your own password
    database: "abc_corporation"//Enter database name
})

const connection = mysql.createConnection(connectionString)

connection.connect((err, res)=>{
    if(err){
        console.log("Error in connection!",err)
    }else{
        console.log("Database connected successfully!")
    }
})

module.exports = connection
