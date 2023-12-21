// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false;


// console.log(tinderUser);


const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userFullName: { 
                firstName: "shilepsh",
                lastName: "Thakur"
            }
    }
}

// console.log(regularUser.fullname?.userFullName?.firstName);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = { obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: 's@g.com'
    },
    {
        id: 2,
        email: 'p@g.com'
    },
    {
        id: 3,
        email: 'r@g.com'
    },
]

// console.log(users[1].id);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // return key value pair array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // false

