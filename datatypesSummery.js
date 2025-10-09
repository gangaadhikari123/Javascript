// Primitive datatypes

// 7 types
/* String, Number, Boolean , Null, undefined, 
  Symbol, BigInt
  */


  // Refrence type / Non primitive

  /*
   Array, Objects, Functions
   */
// symboal
const id =Symbol('123')

const anotherId = Symbol('123')
 
console.log(id === anotherId);// false



// bignumber

const bigNumber = 1213294235345645865468954359n
console.log(bigNumber );

console.log(typeof bigNumber);

const heros = [" shanker", "nagat"];
let myObj ={
    name :"Ruku",
    age : 22
}

 const  myFunction =function(){
  console.log("Hello World");
} 
console.log( typeof myFunction);

