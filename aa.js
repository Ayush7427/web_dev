const arry = [12 , 45 , 78]
arry.map((ele , ind , arry) =>{
    console.log(ele , ind , arry);
})

const arr = ["awqe" , "vbfd"]
const x = arr.filter((element)=>{
    return element.endsWith("fd")
})
console.log(x);

const shoppingcartPrice = [787 , 97 , 34]
const sumOfcartprice = shoppingcartPrice.reduce((pevious , current)=>pevious + current , 0)
console.log(sumOfcartprice);

const value = [123,200 ,300 ,400,10]
console.log(typeof value[3]);
let score = value.every((el)=> typeof el === 'number')
console.log(score);

