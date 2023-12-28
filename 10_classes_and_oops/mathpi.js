// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);// cannot change

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);
 /*writable: false,
        enumerable: false,
        configurable: false
        we cannot modify writable so it can not be changed*/

const chai = {
    name:'ginger chai',
    price:250,
    isAvailable: true,
    orderChai:function(){
        console.log('chai nahi bani');
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', { 
                        writable: false,
                        enumerable: false,
                        configurable: true})

// for (const key in chai) {
//     console.log(key);
// }

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`key ${key} value ${value}`);
    }
}

chai.name = "hi"
// console.log(chai.name) // cannot change