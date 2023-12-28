// ES6 

// class User{
//     constructor(userName, email, password){
//         this.userName = userName,
//         this.email= email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//behind the scene

function newUser(userName, email, password){
    this.userName = userName,
    this.email= email,
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
newUser.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new newUser("tea","chai@gmail.com","123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
