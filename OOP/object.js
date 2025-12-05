function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power =2 
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser (username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function (){
    this.score ++
}
createUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`);
}
const chai =   new createUser("chai", 5);
const tea = createUser("tea", 20);
const user1 = new createUser("alicce, 20");

chai.printMe();

/*
A new obj is creates : the new obj is linked to a prototype (createUser.prototype)

A prototype is linked: The newly created obj is linked to a prototype  property of the constructor function. 
This means that the newly created obj inherits properties and methods from the prototype of the constructor function.

The constructor function is executed: The constructor function is called with the newly created obj as its context (this). 
This allows the constructor function to initialize the properties of the new obj.

The new obj is returned: By default, the new obj is returned from the constructor function. 
If the constructor function explicitly returns an object, that object will be returned instead.

In summary, when you use the new keyword with a constructor function, it creates a new obj, links it to the prototype of the constructor function,
executes the constructor function to initialize the obj, and returns the newly created obj.
*/
