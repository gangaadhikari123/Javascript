function Setusername (username){
    //complex DB call
    this.username = username;
}

function createuser(username, password, email){
    //this gives current context
    Setusername.call(this, username);
    //give reference


    this.password = password;
    this.email = email;
}
const chai = new createuser('chai', '1234', ' asdnjs@gmail.com');
console.log(chai);