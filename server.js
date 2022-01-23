var express = require('express')
var mongoose = require('mongoose')
var dbConnection = require("./Db");
var cors = require('cors');
var bodyParser = require('body-parser')


var app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  age: Number,
  createdAt: Date
})

var userName = mongoose.model('userName', userSchema)
dbConnection();
 

app.post('/addUser', function (req, res) {

  
    // logic
    // var user = new userName({
    //   name: 'Javed',
    //   email: 'javed@gmail.com',
    //   mobile: '124578',
    //   age: 25,
    //   createdAt: new Date()
    // })
    
    // user.save().then(() => console.log('user saved'));

  res.send('add successfully')
})


app.get('/viewUser', function (req, res) {
var user = ''
    // logics 
    run();
    async function run(){
      try{
    user = await userName.find()
    
      }catch(e){
        console.log(e);
      }
      res.status(200).json(user)
    }
  // res.send(user)
  
})

// somethingIp:5000/signup

app.listen('5000',(err)=>{

    if(err){
        console.log("something went wrong", err)
    }
    
})