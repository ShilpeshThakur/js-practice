// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB Calls, Cryptography, network call
//     setTimeout(function(){
//         console.log('Async Task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const PromiseThree = new Promise(function(res,rej){
    setTimeout(function(){
        res({username:"shilpesh",email:"s@s.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})


// const promisefour = new Promise(function(res,rej){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             res({username:"shilpesh",email:"s@s.com"});
//         } else {
//             rej('Error: Something went wrong');
//         }
//     })
// })

//  promisefour.then( (user) =>{
//     console.log(user)
//     return user.username
// }).then((userName)=>{
//     console.log(userName);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => console.log("The Promise is Either resolved or rejected") )


// const promiseFive = new Promise(function(res,rej){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             res({username:"JavaScript",password:"123"});
//         } else {
//             rej('Error: JS went Wrong');
//         }
//     })
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     } catch (error){
//         console.log(error);
//     }
  
// }

// consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=> console.log(err));