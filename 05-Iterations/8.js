// reduce method
const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`)
//     return acc + curVal
// },2)//initial value of acc
// console.log(myTotal);


//in arrow fn

const myTotal = myNums.reduce( (acc,curVal) => acc+ curVal,0)
console.log(myTotal);

const shopingCart = [
    { 
        itemName:"js course",
        price: 2999
    },
    {
        itemName : "python",
        price: 1000
    },
    {
        itemName: "ds",
        price:1000
    },

]
const priceToPay = shopingCart.reduce( (acc,item) =>acc + item.price,0)
console.log(priceToPay);