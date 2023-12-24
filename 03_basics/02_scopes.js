var c = 300;
let a = 300;

if (true){
    let a = 10;
    const b = 20;
    // console.log("Inner: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const userName = "shilpesh"

    function two(){
        const webSite = "youtube"
        // console.log(userName);
    }
    // console.log(webSite); // not defined in current/parent scope
    two() // call the function
}

one();


if(true){
    const userName ="shilpesh"
    if(userName === "shilpesh"){
        const webSite = " youtube";
        // console.log(userName + webSite)
    }
    // console.log(webSite)
}
// console.log(userName);



// ****************************** interesting ***************************

console.log(addone(5)); // we can access
function addone(num){
    return num + 1;
}


// addTwo(10) // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2;
}
