const price = 50;

const Buy = document.getElementById("order");
const increment  = document.getElementById("Increment")
const Decrement = document.getElementById("Decrement");


function display(){
   
    const quantity = document.getElementById("quantity").value;
    document.getElementById("amount").value = quantity*price
}

Buy.addEventListener("click", async()=>{
        const token =  localStorage.getItem('token')
     const quantity = document.getElementById("quantity").value
      const amount  = document.getElementById('amount').value;
      console.log(k);
      const today= new Date();
     

      const result =  await fetch('/api/v1/Akash_Enterprises//order', {
           method:'POST',
           body:JSON.stringify({
            amount:amount,
            quantity:quantity,
           
           }),
           header:{
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer${token}`
           }
           

      }).then((value)=>{
          console.log("successfull");
      },(err)=>{
          console.log(err); 
      })
       
    

});

increment.addEventListener("click",()=>{

    const quantity = document.getElementById("quantity").value;
    document.getElementById("quantity").value = parseInt(quantity)+1;
    const quantity2 = document.getElementById("quantity").value;
    document.getElementById("amount").value = quantity2*price
    

     
})


Decrement.addEventListener("click",()=>{

    const quantity = document.getElementById("quantity").value;
    document.getElementById("quantity").value = parseInt(quantity)-1;
    const quantity2 = document.getElementById("quantity").value;
    document.getElementById("amount").value = quantity2*price
})
