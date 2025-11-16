//javascript execution context
/* global execution context(this is used 
       
   function execution context

   eval execution context  

two phases
  1) memeory creation  phase
  memory phase - all variables are taken and put undefined to both val1,val2)n 
  addNum defined
  result1 and reslt2 = u defined
   
  2) execution phase 


*/

let val1 =10;
let val2 =45;

function addNum(num1,num2){
    let total = num1 + num2;
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(29,39)