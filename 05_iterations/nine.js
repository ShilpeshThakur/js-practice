const myNums = [1,2,3]


// const myTotal = myNums.reduce( function (acc,curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc  + curval
// }, 0)

const myTotal = myNums.reduce( (acc,curval) => { 
    // console.log(`acc: ${acc} and curval: ${curval}`)
    return acc + curval
} , 0)

// console.log(myTotal);

const shoopingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "mobile Dev",
        price: 5999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Data Science",
        price: 12999
    }
]


const totalAmount = shoopingCart.reduce( (acc,item) => acc + item.price,0)

console.log(totalAmount);