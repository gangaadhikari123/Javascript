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
    console.log("object is empty");
 }

 

 // nullish coalescing operator

 let val1 ;
//  val1 = 5 ?? 10;// 5

 val1 = null ?? 10;

 console.log(val1);// 10


var2 = undefined ?? 15;
 console.log(var2);
 
 var3 = null ?? undefined;
 console.log(var3);

 

 // terniary operator

//  condition ? true: false 

 const iceTeaPrice = 100
 iceTeaPrice >= 80? console.log("less than 80") : console.log("more than 80");