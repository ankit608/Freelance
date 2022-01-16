const express = require('express');
const path = require('path');
const route = require('./Routes/route')
const session = require('express-session');

const MongoStore = require('connect-mongodb-session')(session)
const { Store } = require('express-session');


const app =  express();


app.use(express.static(__dirname +"/public"));
app.use(express.json());


var store = new MongoStore({
     uri: process.env.Connection_URI,
     collection: 'mySessions'
   });
   app.use(session({
     
     secret:"key will sign the session",
     resave:false,
     saveUninitialized:false,
     store:store
    
    }))

app.get("/order_page",(req,res)=>{
    if(req.session.User){


     res.sendFile(path.resolve(__dirname,"./orders/order.html"))
    }else{
       res.redirect('/'); 
    }
  }
)


app.use('/api/v1/Akash_Enterprises',route)

app.listen(5000,()=>{

     console.log("server is listining..");
})