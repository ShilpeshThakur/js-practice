class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai")
chai.addCourse()
chai.logMe()

const masalachai = new User("masalaChai")
masalachai.logMe()

console.log(chai === masalachai); // false

console.log(chai instanceof Teacher); //true

console.log(chai instanceof User); //true