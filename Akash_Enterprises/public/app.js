
const Logme = document.querySelector(".Logme");
const Logbox = document.getElementById("login-box");
const signIn = document.querySelector(".SignIn");
const Log = document.querySelector(".log");
const sign_up = document.getElementById("signup_submit");
const LogIn_Database = document.getElementById('LogIn_Database')

Logme.addEventListener('click',function(){
 
    Logbox.style.display='none';
     Log.style.display='block';


})

signIn.addEventListener('click',function(){

   Log.style.display='none';
   Logbox.style.display='block';

})

sign_up.addEventListener('click',function(){

   const username = document.getElementById("username");
  

})
LogIn_Database.addEventListener('click',function(){
 
    const user = document.getElementById('Login_username').value
    const pass = document.getElementById('Login_password').value
    console.log(user,pass);

    const resut = fetch('/api/v1/Akash_Enterprises//LogIn',{
      method:'POST',
      body: JSON.stringify({
        name:user,
        password:pass,
   
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8'
      }
      
   }).then((value)=>{
      console.log(value)
      
   })

    

})
