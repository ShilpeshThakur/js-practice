// primitive

// 7 types : string, Number, Boolean, Null, Undefined, symbol, BigInt

// JavaScript is dynamically typed language.This means that variable types are determined at runtime, and you do not need to explicitly declare tthe type of a variable before using it, You can assign different types of values to a variable during its lifetime.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotheId = Symbol('123')

// console.log(id === anotheId);

const bigNumber = 34554555455544n

// reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "shilpesh",
    age : 27
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof myFunction); // object function 
// console.log(typeof id); // symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(non-Primitive)

let myYoutubeName = "shilpeshThakur"

let anotherName = myYoutubeName
anotherName = "newchannel"
// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email : "user@google.com",
    upi: "upi@ybl"
}

let userTwo = userOne // value by reference

userTwo.email = "s@s.com" // it will change value in heap memory

console.log(userOne.email);

