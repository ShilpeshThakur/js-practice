// singleton

// object literals

const mySym = Symbol("key1");


const jsUser = {
    name: "shilpesh",
    "full name": "Shilpesh Thakur",
    [mySym]: "mykey1", // this is how we include symbol in object
    age:18,
    location: "mumbai",
    email: "s@s.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "shilpesh@thakur.com"
// Object.freeze(jsUser); // freeze the object . we can not change it
jsUser.email = "s@gmail.com"

// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

