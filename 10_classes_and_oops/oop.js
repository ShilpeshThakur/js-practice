// const user = {
//     username: "Shilpesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetail: function(){
//         console.log("Got user Detail from database");
//         console.log(`userName : ${this.username}`);
//         // console.log(this) // current context
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetail());

// console.log(this); //{}

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount= loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greating = function(){
        console.log(`Welcome ${this.userName}`);
    }
    return this;
}

// const userOne = User("Shilepsh",15,true)
// const userTwo =  User("Example",11,false) // values are overridden
// console.log(userOne);


const userOne = new User("Shilepsh",15,true)
const userTwo =  new User("Example",11,false) // values wont be overidden. construction function returns new instance
console.log(userOne.constructor);
// console.log(userTwo);

