const arr = [1 , 2 , 3]
arr.forEach(function(element , index , arr) {
    console.log(element , index , arr);
})

// second method
arr.forEach( (element , index , arr) =>{
    console.log(element , index , arr);
})

const heros = ["ayushiv" , "ASTAADiv" , "fuTUre"]

heros.forEach((element) => {
console.log(element.toUpperCase());
})

// using map 
heros.map((element) =>{
    console.log("hi", element.toUpperCase()); 
})

// filter ka use
console.log(heros);
const herosWithiv = heros.filter((element) =>{
  return  element.endsWith("iv")
})
console.log(herosWithiv);

// shopping cart
const cartBill = [20 , 30 , 70]
const sumOfcartbill = cartBill.reduce((pevious , current) => pevious + current , 0)
console.log(sumOfcartbill); 


// check if all the value are number
const gameScore = [200 , 300 , 350 , 410 , 50]
// console.log(typeof gameScore[3]);
const gameScorecheck = gameScore.every((el) => typeof el === 'number')
console.log(gameScorecheck);

// find score above 200
const scoreAbove200 = gameScore.find((el) => el > 200)
console.log(scoreAbove200);

// findindex
const arr2 = [1 ,2 ,3,44,65,718 ]
const index = arr2.findIndex((elemt) => elemt > 41)
console.log(index)

// some
const somes = [1 ,3,5,2 ]
const soom = somes.some((element)=> element % 2 == 0)
console.log(soom)

// sort
const aq = [5,4,3,2,1]
const b = aq.sort()
console.log(b)

const months = ['october' , 'january' , 'march']
const reason = months.sort()
console.log(reason);

const alphaBets = ['a','c','b','q','g']
const no = alphaBets.sort()
console.log(no);