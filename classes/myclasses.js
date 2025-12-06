// class User {
//     constructor (username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encrypyPassword(){
//         return `${this.password}absdjo`
//     }
//     changeusername (){
//         return`${this.username.toUpperCase()}`
//     }
// }
// const user1 = new User("Yiefj","fhfg@gmail.com",124324);
// console.log(user1.encrypyPassword());
// console.log(user1.changeusername());

//behind the scene

function User(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
}
User.prototype.encrypyPassword = function (){
        return `${this.password}absdjo`
}

User.prototype.changeusername = function (){
        return `${this.username.toUpperCase()}`
}

const user2 = new User("Ganga","ganga@gmail.com",123456);
console.log(user2.encrypyPassword());
console.log(user2.changeusername());

