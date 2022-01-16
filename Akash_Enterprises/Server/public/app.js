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

sign_up.addEventListener('click', async function(){

   const username = document.getElementById("username").value;
   const  contact  = document.getElementById("contact").value;
   const  pass1 = document.getElementById("password").value;
   const pass2 = document.getElementById("password2").value;
   const Address = document.getElementById("Address").value;

      
        
      const result1 =  await fetch('/api/v1/Akash_Enterprises//SignUp',{
         method:'POST',
         body: JSON.stringify({
            name:username,
            contact: contact,
            Password:pass1,
            Address: Address
 
          }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }

      })  
        result1.text().then((value)=>{
             
           const string = "String"
            
          
             const p=document.getElementById('invalid_signIn');
           
             if(value ==="<h6>user already exists<h6>"){
             p.style.color = "red";}
              else{
                 p.style.color="green"
              }
               p.innerHTML = value;
             
            
        })
      
  

})
LogIn_Database.addEventListener('click', async  function(){
     
    const user = document.getElementById('Login_username').value
    const pass = document.getElementById('Login_password').value
    console.log(user,pass);

    const result = await fetch('/api/v1/Akash_Enterprises//LogIn',{
      method:'POST',
      body: JSON.stringify({
        name:user,
        password:pass,
   
      }),
      headers:{
         'Content-type': 'application/json; charset=UTF-8',
        
      }
      
   })
   
   const token = await result.json();
   localStorage.setItem('token',token.token)

     const tok = localStorage.getItem('token');
    if(tok!=="undefined"){
       window.open('/order_page')
    }else{
     const k =  document.getElementById('invalid');
       k.style.color ="red";
       k.innerHTML = "<h6>invalid username or password</h6>";
    }
     
     
})
