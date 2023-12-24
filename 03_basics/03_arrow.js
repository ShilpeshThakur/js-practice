const user ={
    username: "shilpesh",
    price: 999,

    wecomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    },
    tempVariable: 80
}

// user.wecomeMessage()
// user.username = "sam"
// user.wecomeMessage()


// console.log(this); //in node enviromnmet it is empty object. In browser global object is "Window"

// function chai(){
//     let userName = "shilpesh"
//     // console.log(this);
//     // console.log(this.userName); // cannot use like this
// }

// chai();

const chai = () => {
    let userName = "shilpesh"
    // console.log(this); // undefined in arrow function
    // console.log(this.userName);
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// } 

// const addTwo = (num1,num2) =>  num1 + num2; // implicit return

// const addTwo = (num1,num2) =>  (num1 + num2) // implicit return. If we user surly braces we need to write return keyword. In parenthysis no need to write it

const addTwo = (num1,num2) =>  ({username:"shilepsh"}) // to return object we need to wrap it in parenthesis

console.log( addTwo(2, 3) )

const myArray = [2,4,8,6]

function print() { // No arguments object in arrow functions. it is only in normal functions
    console.log(arguments)
}
print("hello", 400, false)

// {
//   '0': 'hello',
//   '1': 400,
//   '2': false
// }

