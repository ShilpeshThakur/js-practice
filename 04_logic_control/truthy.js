const userEmail = ""

// if (userEmail) {
//     console.log("Got user email"); 
// } else {
//     console.log("Don't have user email");
// }

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values
// "0", 'false', " ", [], {}, function(){} //empty function


// if (userEmail.length === 0) { // check array is empty
//     console.log("Array is empty");
// }


const emotyObj = {}

// if (Object.keys(emotyObj).length === 0) { //check object is empty 
//     console.log("object is empty");
// }

// Nullish Coalescing operator (??): null defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // 10 will be assign
//  val1 = undefined ?? 15 // 15 will be assign
val1 = null ?? 10 ?? 20 // 10 will be assign
// val1 = null ?? null ?? 20 // 20 will be assign

// console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


