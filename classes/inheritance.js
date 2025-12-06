class User{
    constructor (username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    logMe(){
        console.log(`Username is ${this.username}, Email is ${this.email}`);
    }
}

class Teacher extends User{
    constructor(username,email,password,subject){
        super (username);

        this.subject = subject;
        this.email = email;
        this.password = password;

}
addCourse(){
    console.log(`A new course is created by ${this.username}`);
}
}

const User1 = new Teacher( " GAnga", "teacher@gmail.com",1234);
User1.addCourse();
const tea = new User("GAngf","fjberh@gmail.com", 1324);
tea.logMe();

console.log(User1 === tea);
console.log(Teacher instanceof User);
console.log(User1 instanceof Teacher);
console.log(Teacher.prototype.isPrototypeOf(User1));
