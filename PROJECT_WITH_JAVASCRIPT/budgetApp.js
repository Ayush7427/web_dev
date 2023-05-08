
const btn1 = document.getElementById("btn")
const btn2 = document.getElementById("btn1")
let resultBudget 
let resultExpense 
let result

btn1.addEventListener("click" , () => {
    let budget = document.getElementById("yourBudget").value
    let sol = document.querySelector(".velly1")
    console.log(budget);
    if(budget < 0  || budget === ""){
        sol.innerHTML =  "Invalid Budget"
    }
    else{
        sol.innerHTML = '$' + budget
    }
    resultBudget = budget
    // console.log("result" , resultBudget);

})


btn2.addEventListener("click" , () => {
    const nameOfExpense = document.getElementById("expense").value
    let amount = document.getElementById("amount").value
    let val = document.querySelector(".velly2")
    const balance = document.querySelector(".velly3")
    const footerSection = document.querySelector(".footerSection")

    console.log(amount);
    console.log(nameOfExpense);

    if(amount == 0 || nameOfExpense == null){
        val.innerHTML = 'Invalid Expense'
    }
    else{
        val.innerHTML = '$' + amount
    }
    resultExpense = amount
    // console.log("result" , resultExpense);

    result = resultBudget - resultExpense
    console.log( result);
    balance.innerHTML = "$" + result

    footerSection.innerHTML = `Your Budget is ${resultBudget} , ${nameOfExpense} Expense is ${resultExpense} and Total Balance left ${result}`
    footerSection.style.display = "block"
})