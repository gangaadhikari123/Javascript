// for of loop
for ( const char of "Ganga"){
    console.log (char);
}

let myArray = ["flashman", 1, 2, "Nepal" , true]
 
for (const iterator of myArray) {
     console.log(iterator);
}



const greeting = "hello world!"

for ( const gret of greeting){
    console.log(`Each char is ${gret}`)
}



// maps

const map = new Map()
map.set("name", "Ganga")
map.set("age", 25)
map.set("city", "Kathmandu")

// for (const [key, value] of map) {
//     console.log(`Key: ${key}, Value: ${value}`)
// }

for (const [key, value] of map){// use [] on key so that u gate data without array
    console.log(key, ':-', value);
}


// const myObject ={
//     'gam1' : 'NFS',
//     'gam2' : 'spiderman'
// }

// for (const [key, value] of myObject){ //this do  not works

//     console.log(key, ':-', value)
// }



//for in loop


const obj1={
    js: 'js',
    cpp: 'C++',
    rb: 'rubby'
}
for (const key in obj1){
    console.log(key);
}
