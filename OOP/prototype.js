let myname = " RUKU"
let mychannel = "RUKU TECH"

console.log(myname.length);// 5

console.log(myname.truelength);// undefined

let myheros= ["shaktiman","naagraj","doga"]

let heropower = {
    shaktiman : "flight",
    naagraj : "snake powers",
    doga : "strength",

    getshaktiman : function(){
        console.log(`super power is ${this.shaktiman}`);

    },

    getnaagrajpower : function(){
        console.log(`super power is ${this.naagraj}`);

    },

    getdogapower : function(){
        console.log(`super power is ${this.doga}`);

    }

}

Object.prototype.getHeroPower = function(hero) {
    console.log(`super power is ${this[hero]}`);
}



//inheritance
const user = {
    name : "RUKU",
    email : "sdjd@gmail.com"
}

const teacher= {
    makevideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport ={
    makeAssigment : true,
    isAvailable: true,
    __proto__: TeachingSupport
}
teacher.__proto__ = user 

// modern syntax

Object.setPrototypeOf(TeachingSupport,user)
Object.setPrototypeOf(teacher,user)
console.log(teacher.email);
console.log(teacher.name);
console.log(teacher.makevideo);