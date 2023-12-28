class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Username :${this.userName} `);
    }

    static createId(){
        return `123`
    }
}

const Shilpesh = new User("Shilpesh")
Shilpesh.logMe()
console.log(User.createId()) // you can acces static method directly by class. not by instance


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId()) // can not access static by instances

