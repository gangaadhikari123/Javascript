

// // js is a synchronous lnguage and single threaded
// execution Context 
/*
execute one line of code at a time
call stack 
memeory heap 
each operation waits for the last one to complete before executing*/



// blocking code
//  blocking code is code that stops the execution of other code until it completes its task
//  example : function that takes a long time to complete like fetching data from a server

// non blocking code
// non blocking code is code that allows other code to execute while it is still running
// example : setTimeout, promises, async/await

// // asynchronous code
// asynchronous code is code that does not block the execution of other code while it is running
// example : setTimeout, promises, async/await

// // callbacks
// a callback is a function that is passed as an argument to another function and is executed after the main function completes its task
// example : setTimeout(function(){console.log("Hello World")}, 1000)

// // promises
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// example : 
// let promise = new Promise(function(resolve, reject){
//     // do something
//     let success = true;
//     if(success){
//         resolve("Promise resolved");
//     }
// )
// feach has high priority queue

