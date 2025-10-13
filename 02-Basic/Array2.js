const marvel_heros = ["thor" , "spiderman"]
 
const dc= ["superman" , "flash", "batman"]

marvel_heros.push(dc)

console.log(marvel_heros);

marvel_heros.concat(dc)
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc)
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc]
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6,[8,9]]]

const real_another_array = another_array.flat(Infinity)//can take nu,mbers as well
console.log(real_another_array);


console.log(Array.isArray("hello"));//false

console.log(Array.from("hello"));//['h','e','l','l','o']

console.log(Array.from({name: "hello"})); //intresting

let s1 =100

let s2 =2000

let s3 = 3000

console.log(Array.of(s1,s2,s3));//[100,2000,3000]











