class User{
    constructor(firstName, lastName,password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

    get firstName(){
        return this._firstName.toLowerCase();
    }
    set firstName(value){
        this._firstName = value;
    }
    
    get password(){
        return this._password.toUpperCase();

    }
    set password(value){
        this._password = value;
    }
}

const hetis = new User("Hiteah", "Bhandari", "woiefkdj");
console.log(hetis.firstName);
console.log(hetis.lastName);
console.log(hetis.password);
