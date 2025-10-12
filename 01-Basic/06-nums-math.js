
const balance = new Number(100);
console.log(balance.toString());

//precision value

const price = 99.99999;

console.log(price.toFixed(2));//100

const hundres = 100000
console.log(hundres.toLocaleString("en-Np"));//100,000

//math 
console.log(Math);//object [Math] {}
console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-100));//100
console.log(Math.round(99.5));//100

console.log(Math.ceil(99.1));//100
console.log(Math.floor(99.9));//99

console.log(Math.random());//0-0.999999
console.log(Math.random()*10 + 1);//1-10

console.log(Math.floor(Math.random()*10) +1);//1-10

//min and max

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)
