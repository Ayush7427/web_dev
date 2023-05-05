const details = [
    {
        accountId : 1 ,
        balance : 5400000
    } ,
    {
        accountId : 2 ,
        balance1 : 900
    } ,
    {
        accountId : 3 ,
        balance2 : 100000
    } ,
    {
        accountId : 4 ,
        balance3 : 7000
    }
]

console.table(details);

const fiu = details.filter((element)=>{
    return element.balance1
})

console.log(fiu);

