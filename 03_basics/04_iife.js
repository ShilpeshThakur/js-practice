//Immediately Invoked Function Expression (IIFE)
// to protect from global scope (variables) pollution. we need IIFE

(function chai(){
    //named iife
    console.log(`DB Connected`);
})(); // need to end the execution of iife by puting semicolon

((name) => {
    //un named iife
    console.log(`DB Connected two ${name}`);
})("shilpesh")

// to write 2 iife we need to pu lsemicolon after first iife