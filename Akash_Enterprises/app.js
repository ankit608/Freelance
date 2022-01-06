const Logme = document.querySelector(".Logme");
const Logbox = document.getElementById("login-box");
const signIn = document.querySelector(".SignIn");
const Log = document.querySelector(".log");
const sign_up = document.getElementById("signup_submit");

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