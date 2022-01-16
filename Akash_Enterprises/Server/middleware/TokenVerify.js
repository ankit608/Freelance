const jsonwebtoken = require("jsonwebtoken");


const TOV = (req,res,next)=>{
    const authheader = req.headers.authorization
     if(!authheader||!authheader.startsWith('Bearer')){
           res.send("<h1> no token </h1>")
     }else{

        const token = authheader.split(' ')[1]
        console.log(token)
        try{      
               
                const decoded =  jsonwebtoken.verify(token,process.env.SecretKey);
                console.log(decoded);
                console.log(req.body)
               const {name,Address,contact} = decoded
               req.body.name = name
               req.body.address = Address
               req.body.contact=contact
               next()
        }catch(err){
           
            res.send("token_error")
        }  


     } 
 
      

}

module.exports = {TOV};