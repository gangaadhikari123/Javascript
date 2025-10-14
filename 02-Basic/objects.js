// singleton 

// object literals


const mySym = Symbol("key1")

const jsUser = {
    name : "Ganga",
    age : 20,
    [mySym] : "myKey1",
    email: "qasnd@domain.com",
    isLoggedIn : false,
    LastLodedTime : ['monday', 'tuesday']
}


console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);


jsUser.email ="hitesh@chatgpt.com"
console.log(jsUser.email);//hitesh@chatgpt.com
//Object.freeze(jsUser)//not allow to change the object
jsUser,email = "hey@gmail.com"
console.log(jsUser.email);//hitesh@chatgpt.com


//function
jsUser.greeting = function(){
    console.log("Hello js User ");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}
console.log(jsUser.greetingTwo());// Hello js user , Ganga 

