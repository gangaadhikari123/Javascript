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

for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`)
}