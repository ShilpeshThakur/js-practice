// array

const myArr = [0, 1, 2, 3, 4, 5, true, "shilpesh"];
const myHeros = ["Thor","spiderman"]

const myArr2 = new Array(0,1,2,3,4,5);

// console.log(myArr[1]);

// Array Method

// myArr2.push(6);
// myArr2.push(7);
// myArr2.pop();

// myArr2.unshift(9) // add to the start of array
// myArr2.shift() // remove fro start of array

// console.log(myArr.includes(9));
// console.log(myArr2.indexOf(3)); // return -1 if not found else return index

const newArr = myArr2.join()
// console.log(myArr2)
// console.log(newArr);

// console.log(typeof newArr);


//slice, splice

console.log("A ",myArr2);

const myn1 = myArr2.slice(1,3); // dont consider range

console.log(myn1);
console.log("B ",myArr2);

const myn2 = myArr2.splice(1,3); // splice manupualte and remove element from original array and consider the range

console.log("c ",myArr2);
console.log(myn2);

