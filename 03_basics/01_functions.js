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

console.log(loginUserMessage());


