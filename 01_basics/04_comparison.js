// console.log( 2 > 1);
// console.log( 2 >= 1);
// console.log( 2 < 1);
// console.log( 2 == 1);
// console.log( 2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(Number(null)); // 0

/* the reason is that an equality check == and comparison > < >= <= work differently comparioson convert null to number, treating it as 0 that's why (3) null >= 0 is true and null > 0 is false */

// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined < 0); // false

// console.log(Number(undefined)); // Nan


// === strict check (check with datatype) 

console.log("2" === 2); //false

