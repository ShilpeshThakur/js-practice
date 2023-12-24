const coding = ["js","ruby","python","java","cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// });

// coding.forEach( (element) => {
//     console.log(element);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe); // give reference to call back function

// coding.forEach( (item, index, arr)=> {
//     console.log(item,index,arr);// foreach has 3 parameter element,index and whole array
// })


const myCoding = [
    {
        languageName: "javaScript",
        LangiageFileName: "js"
    },
    {
        languageName: "Java",
        LangiageFileName: "java"
    },
    {
        languageName: "Python",
        LanguageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})