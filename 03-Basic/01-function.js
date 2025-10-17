function myFun(){

    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
myFun()

/*function addTwoNum (num1, num2){
    console.log (num1 + num2);
}
addTwoNum(4,5)
*/
//another way
const number = function addtwo (num1, num2){
    return num1 + num2 ;
    
}

function loginUser(username){
    if (username === undefined){

        console.log("Please enter a username");

    }
    return `${username} just logged in`
}
console.log(loginUser());


//rest operator

function calCartPrice(...num1){


    return num1
}

console.log(calCartPrice(200,300,400))

//passing object

const user ={
    name : "fj",
    price : 324
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
}
handleObject(user)

const myNewArray = [200,499,4000]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));