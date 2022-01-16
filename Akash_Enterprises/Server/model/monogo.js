const db = require("mongoose");
const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()

const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session)
const  client=null;
const url = process.env.Connection_URI



const connectDb =(url)=>{

   
     return db.connect(url,{useNewUrlParser:true,
    
     
      useUnifiedTopology:true,

    })

}

const start = async ()=>{

     

       const value =  await connectDb(url);
      
       }

start();

const user_Schema = db.Schema({

      name:{type:String},
    password:{type:String},
      
  

})

 const User = db.model('users',user_Schema);
 
 const Order_Schema = db.Schema({
      name:{type:String},
      date:{type:String},
      amount:{type:String},
      quantity:{type:String},
      contact:{type:String},
      address:{type:String},


})

const Order = db.model('Order',Order_Schema);

 const SignUp_Schema = db.Schema({
       name:{type:String},
      password: {type:String},
        contact:{type:String},
        Address:{type:String}  
 })

 const sign_up =  db.model('SignIn_users',SignUp_Schema)

  module.exports = {User,Order,sign_up,client};

