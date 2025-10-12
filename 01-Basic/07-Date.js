// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
//console.log(myDate.toDataString());
console.log(myDate.toISOString());//2025-10-12T11:09:53.701Z

let myCreatDate = new Date(2025 , 9, 12, 11);

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

//for month
//console.log(myDate.getMonth());

//console.log(myDate.getFullYear());

newDate.toLocalleString('default', { 
    weekday: 'long',
    year: 'numeric',
})