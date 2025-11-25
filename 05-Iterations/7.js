const myNum = [1,2,3,4,5,6,7,8,9]

//  


//chaning


const newNums = myNum.map( (num ) => num*10)
.map((num) => num + 5 )
.filter( (num) => num >= 75)
console.log(newNums);

