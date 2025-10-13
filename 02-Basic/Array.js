const myArr = [0,1,3,4,5];
console.log(myArr);
// data type can be any type

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);

const myArr2 = new Array(2,3,4,5);
console.log(myArr2);

// Array methods
//push is used to add elements at the end of the array
//pop is used to remove elements from the end of the array
//shift is used to remove element from the start of the array
//unshift is used to add elements at the start of the array

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.shift(0)
console.log(myArr);

console.log(myArr.includes(9));

const newArr = myArr.join()

console.log(newArr);// join and convert to string


//slice and splice
//slice is used to extract a portion of an array and return a new array 
