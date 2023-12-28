// function setUsername(username) {
//     // complex Db calls
//     this.username= username

//     console.log("called");
// }

// function createUser(username,email,password){
//     // setUsername(username) // its not call . just referrenced
//     setUsername.call(this,username) // explicitly called with this. Passing the context

//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai","chai@gmail.com","123")
// console.log(chai);

const User = {
    setUsername: function (username)  {
        // complex Db calls
        this.username= username
        console.log("called")
    },

    createUser: function(username,email,password){
        User.setUsername.call(this,username) 
       
        this.email = email
        this.password = password
    }
}

const chai = {};
User.createUser.call(chai, "chai", "chai@gmail.com", "123"); // Explicitly set the context using call
console.log(chai);
