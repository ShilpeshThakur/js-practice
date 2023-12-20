// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,);
// console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023,0,23, 5, 3);
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14");
// console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-14-2023");
// console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());

console.log(Math.floor(Date.now()/1000)); // convert to seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday : "long"
})


