function sayMyName(){
    console.log("Shilpesh");
}

// sayMyName()

// function addTwoNumber(number1,number2){
//     if(typeof number1 === "number" & typeof number2 === "number" ){
//         console.log(number1 + number2);
//     }
//     else{
//         console.log("Please provide Number parameter");
//     }
// }


function addTwoNumber(number1,number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

// addTwoNumber(4,5);
// addTwoNumber(4,null);

const result = addTwoNumber(4,5);

// console.log("result : ", result);

function loginUserMessage(userName){
    if(userName === undefined ){
        console.log("please enter the Username")
        return
    }
    return `${userName} just logged in`

}

// console.log(loginUserMessage("shilpesh"));

// console.log(loginUserMessage());


function calculateCartPrice(val1,val2, ...num1){ // ... rest operator (is also spread operator)
    return num1
}

// console.log(calculateCartPrice(200,400,500,600));// 200 to val1, 400 to val2

const user = {
    userName : "shilpesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     userName: "sam",
//     price:555
// })

const myNewArray = [200,400,500,600]

function returnSecondValue(newArray){
    return newArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));