const Logme = document.querySelector(".Logme");
const Logbox = document.getElementById("login-box");
const signIn = document.querySelector(".SignIn");
const Log = document.querySelector(".log");
console.log(Logme);
console.log(Logbox);
console.log(signIn);

Logme.addEventListener('click',function(){
 
    Logbox.style.display='none';
     Log.style.display='block';


})

signIn.addEventListener('click',function(){

   Log.style.display='none';
   Logbox.style.display='block';

})