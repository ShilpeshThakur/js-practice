// for of

// ["","",""]
// [{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " "){ // skip spaces
        continue
    }
    // console.log(`each char is ${greet}`);
}


//Maps 

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")


// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}


const myObject = {
    'Game1':'NFS',
    'Game2':'Spiderman'
}

// for (const [key, value] of myObject) { // object not iterable with for of loop
//     console.log(key,':-',value);
// }