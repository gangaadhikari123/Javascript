// use string interpolation 
const name = "Ruku"
const age = 24
console.log(`hello my name is ${name} . My age is ${age}`)


const gameName = new String ('Cricket-VolleyBall')


// key value accesses

console.log(gameName[0]);//C

console.log(gameName.length),

console.log(gameName.toUpperCase());//CRICKET

console.log(gameName.charAt(3));//c

console.log(gameName.indexOf('t'));//6


//dividing inti sub strings

const newString = gameName.substring(0,4)
console.log(newString);//Cric

//slice
const anotherString = gameName.slice(-15,9)
console.log(anotherString);


const newStringOne = "     ruku   "
console.log(newStringOne);

// trim
console.log(newStringOne.trim);//[Function:trim]

console.log(newStringOne.trim());//rukr


//replace

const url= "https://Hitesh.com/hitesh%20Choudary"
 
console.log(url.replace('%20','-'));//change %20 t0 -


console.log(url.includes('Hitesh'));// find out if Hitesh is present in url or not



console.log(gameName.split('-'));

