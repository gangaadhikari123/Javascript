// singlaton

//const tinderUser = new Object()

//console.log(tinderUser);
//non singleton

const tinderUser = {}

    tinderUser.id ="1234",
    tinderUser.name = "Sammy",
    tinderUser.isloggedIn = false;

   // console.log(tinderUser);
 // same as above object 
 
//nested object
 const regularUser ={
    email: "some@gmail.com",
    fullname: {
       userfullName : {
            firstName: "ruku",
            lastName : "sharma"
        }
    }
 }
console.log(regularUser.fullname.userfullName.firstName);

const obj1 ={
 1:"a",
 2:"b"
}
 const obj2= {3:"c", 4:"d"}
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);

// another way is ...spead operator
const obj4 ={ ...obj1, ...obj2}
console.log(obj4);

console.log(Object.keys(tinderUser));// for accessing all the keys of tinder object
console.log(Object.values(tinderUser)); // for accessing all the values of tinder object
console.log(Object.entries(tinderUser)); //for accessing all the entries of tinder object which contains array of arrays for each key value pair 

console.log(tinderUser.hasOwnProperty("name")); //true