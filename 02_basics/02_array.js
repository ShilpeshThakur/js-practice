const marvelHeros = ["thor","ironMan","spiderman"]
const dcHeros = ["superman","batman","splash"]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]; // ... is spread operator 
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = anotherArray.flat(Infinity); 

// console.log(realAnotherArray);


// console.log(Array.isArray("shilpesh"));
// console.log(Array.from("shilpesh"));
console.log(Array.from({name: "shilpesh"}));  //interesting (return empty array. need to specify key)

let score1  = 100 
let score2  = 200 
let score3  = 300 

console.log(Array.of(score1,score2,score3));



