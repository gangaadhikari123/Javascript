class User{
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
     static createId(){//will not be inheritated
        return `12345`;
    }

}
const hitesh = new User("Hitesh");
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);

        this.email = email;
    }
}
const Phone = new Teacher("Iphone", "I@email.com");
console.log(Phone);
Phone.logMe();
console.log(Phone.createId());
