const userEmail = "hitesh@gmail.com"

if (userEmail) {
    console.log("got user email");
}
else{
    console.log("Dont have user email");
}

/*falsy values 
 false, 0, -0, BigInt 0n, "", null. undefined, Nan 

 all remaining are truthy values like
 true, 1, "0", "false", [], " " , {} , function(){}
 */

 if (userEmail.length === 0){

    console.log("Array is empty");
 }

 

 const emptyObj ={}
 if (Object.keys(emptyObj).length === 0){
    console.log("ob\ject is empty");
 }

 

 

 