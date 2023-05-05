const itemsPrice = [20,30,10,20]
const sumofCartprice = itemsPrice.reduce((current , pevious) => pevious + current ,0)
console.log(sumofCartprice);