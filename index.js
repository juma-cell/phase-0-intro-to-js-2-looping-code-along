// Code your solutions in this file
const names=["Guadalupe", "Ollie", "Aki"]; 
  
 function writeCards(names,event)  
 { 
   const newArray = [] 
    
   for (let i = 0; i < names.length; i++) 
 { 
  
   const cardMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!` 
   newArray.push(cardMessage) 
    
 } 
  
 return newArray; 
 } 
      
  
 writeCards("names", "surprise"); 
  
  
  
 function countDown() { 
   var countdown = 11 
 while (countdown > 0){ 
     countdown--; 
     console.log(countdown); 
 } 
 }