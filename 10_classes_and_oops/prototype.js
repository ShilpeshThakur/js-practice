let myName = "Shilpesh    "
let myChannel = "chai    "


// console.log(myName.truelength())

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.shilpesh = function(){
    console.log("shilpesh is present in all object")
}

Array.prototype.heyshilpesh = function(){
    console.log("shilpesh says hello")
}
// myHeros.shilpesh()
// myHeros.heyshilpesh()
// heroPower.heyshilpesh() // dont have access to Array function. it is object


// inheritance

const user = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= user


//  modern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher)

let AnotherUserName = "ExampleisHere   "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`)
}

AnotherUserName.trueLength()

"Shilpesh   ".trueLength()
"icetea  ".trueLength()