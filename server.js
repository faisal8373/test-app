var express = require('express')
var dbConnection = require("./Db");
var app = express()





dbConnection();
app.get('/addUser', function (req, res) {

    // logics > signup

  res.send('User added successfully')
})


app.get('/viewUser', function (req, res) {

    // logics 

  res.send('List users')
})

// somethingIp:5000/signup

app.listen('5000',(err)=>{

    if(err){
        console.log("something went wrong", err)
    }
    
})