const express = require('express');
const path = require('path');
const route = require('./Routes/route')
const app =  express();

app.use(express.json());
app.use(express.static('../public'));

app.use('/api/v1/Akash_Enterprises',route)

app.listen(5000,()=>{

     console.log("server is listining.."); 
})