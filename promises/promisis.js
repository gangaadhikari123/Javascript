const promise1 = new Promise(function(resolve, reject){
//do an async task
// DB calls, cryptography, network

setTimeout(function(){
    console.log(`Async task is completed`);
    resolve()
},1000)


})
promise1.then(function(){
    console.log("promise consumed");
})


// new promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Ruke", email:"ruku@gmail.com"})

    },1000)
})
promise3.then(function(user){
console.log(user);

})



const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false //if true then error
        if(!error){
            resolve({username: "Ganga", password: "1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }

    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))



const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false //if true then error
        if(!error){
            resolve({username: "Ganga", password: "1234"})
        }
        else{
            reject('ERROR: JS went wrong')
        }

    },1000)
});

async function consumePromise5(){
    // const response = await promise5
    // console.log(response);
    try{
        const response = await promise5
        console.log(response);
    }
    catch (error){
        console.log(error)

    }
}
consumePromise5()

async function getAllUsers(){
   try{
     fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await response.json()
    console.log(data);
   
   }catch(error){
    console.log("E: ", error)
   }
}
getAllUsers()