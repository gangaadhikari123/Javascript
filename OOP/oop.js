const user ={
    username: "Rukt",
    loginCount : 3,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from db");
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails);

//constructor function
function User ( userName , loginCount, isLOggedin){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLOggedin = isLOggedin;

    this.greting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this// inpictily defined as defaults
}

// const userOne = User("ruk", 12, true)
// const userTwo = User("sru", 3, false)//this will override userOne and pass these values to the user

// console.log(userOne);
// console.log(userTwo);



// to solve above overried problem  we use new keyword
// when we use new keyword a new obj is created
// a constructor call is creates
// this keyword iss injectd to those constructord

const userOne = new User("ruk", 12, true)
const userTwo = new User("sru", 3, false)
console.log(userOne);



