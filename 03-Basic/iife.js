//immediately invoked function expression (IIFE)
// function coffee()
// {
//     console.log('DB Connected');
// }
// coffee()  //normal function call


(function chai(){
    console.log(`AgIn DB COnnected`);
   })();

   //to cleare the pllution of global scope we use iife


   (function aur(){//name iife
    console.log(`DB 2`);
   }) (); //; is used for no.of functions
   

   ( (name) =>{//normal iife with paramater passed
    console.log(`Db 3 ${name}`);
   })('SARU');