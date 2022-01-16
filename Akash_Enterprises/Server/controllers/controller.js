const {User,Order,sign_up} = require('../model/monogo');
const {parse,stringify,assign} = require ('comment-json');
const path= require('path')
const jwt = require('jsonwebtoken');
const session = require('express-session');


const ChecklogIn =  async (req,res)=>{
  
  const name =  req.body.name
  const pass = req.body.password
   sign_up.findOne({name:name, password:pass}).then(async (value)=>{
       if(value===null){
         res.status(200).json({page:'notfound'});

       }else{
        try{  
              const{name,Address,contact} = value;
        
             const token =jwt.sign({name:name,Address:Address,contact:contact},process.env.SecretKey,{expiresIn:'1h'} )
             req.session.isAuth=true;
             
             req.session.User = req.body.name 
             res.status(200).json({msg:'user_Login',token});  
           
         
        } catch(err){
          console.log(err);
          res.send("<h1>ERROR!!!</h1>");
        }      
          
           
       }
                       

  }).catch((err)=>{
        console.log(err);
  })


     
}

const Sign_Up = async (req,res)=>{

   const{name,contact,Address, Password}   =  req.body
     console.log(req.boy);
     const exist = await sign_up.findOne({name:name, Address:Address, contact:contact});
     if(exist){
           res.send("<h6>user already exists<h6>")
        
     }else{

      sign_up.insertMany({name:name, password:Password,contact:contact,Address:Address})
     res.send(" <h6>Sign_In Successfully!!Go back to log_In<h6>"); }

}

const Get_orders =   (req,res)=>{
   
   if(req.session.User){
       
    console.log(req.body)
       Order.insertMany({name:req.body.name, address:req.body.address,contact:req.body.contact,quantity:req.body.quantity,
        date:req.body.date,amount:req.body.amount})
   }
   

 }

 const View_orders = (req,res) => {


 }

 module.exports={ChecklogIn,Sign_Up,Get_orders,View_orders};


