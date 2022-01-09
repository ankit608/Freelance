const db = require("mongoose");

const url ="mongodb+srv://john:1234@nodeexpresprojects.ppv1c.mongodb.net/Akash_Enterprises?retryWrites=true&w=majority"


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
      contact:{type:String},
      Adress:{type:String},


})

const Order = db.model('Order',Order_Schema);



  module.exports = {User,Order};

