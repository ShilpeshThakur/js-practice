const name = "shilpesh";
const repoCount = 50

// console.log(name + repoCount + "value");


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String('Shilpesh-Ts-ds')
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("s"));

const newString = gameName.substring(0,4); // we cannot give negative value in substring
// console.log(newString);

const anotherString = gameName.slice(-8,4); // negative will go reverse of the string . second parameter is upto the index . In this case it will print from -8 upto 0,1,2,3

// console.log(anotherString)

const newStringOne = "   shilpesh  "

// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://shilpesh.com/shilpesh%20thakur"

console.log(url.replace('%20','-'));

console.log(url.includes('abc'));

console.log(gameName.split('-'));

console.log(gameName.small());

