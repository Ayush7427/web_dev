const quizDB = [{
    question : "Q1) what is the full form of HTML",
    a : "qwerty hi", 
    b : "Hyper txt mar" ,
    c : "none of these" , 
    d : "Hyper Text Markup Language" ,
    ans : "ans4"
} ,
{
    question : "Q2) FULL Form of CSS",
    a : "qwerty hii", 
    b : " Casading Style Sheet" ,
    c : "txt mar",
    d : "none of these" , 
    ans : "ans2"
},
{
    question : "Q3) Which of the following is not JavaScript Data Types?",
    a : "Undefined",
    b : " Number" ,
    c : "Boolean" ,
    d : "Float" ,
    ans : "ans4"
}]

const question = document.getElementById("question")
const option1 = document.getElementById("option 1")
const option2 = document.getElementById("option 2")
const option3 = document.getElementById("option 3")
const option4 = document.getElementById("option 4")
const btn = document.getElementById("sub")
const showScore = document.getElementById("showScore")
const y = document.querySelectorAll(".answer")

let questionCount = 0
let score = 0

function displayQuestion(){
// console.log(quizDB[1].a);
question.innerText = quizDB[questionCount].question
option1.innerText = quizDB[questionCount].a
option2.innerText = quizDB[questionCount].b
option3.innerText = quizDB[questionCount].c
option4.innerText = quizDB[questionCount].d
}
displayQuestion()

function userAnswer(){
    let input
    y.forEach(el => {
        if(el.checked){
            input = el.id
        }
    })
    return input
}
userAnswer()
function deselectRadio(){
    y.forEach(el => el.checked = false)
}
btn.addEventListener("click" , () => {
    let answertoCheck = userAnswer()
    console.log(answertoCheck);
    if(answertoCheck === quizDB[questionCount].ans){
        score++
    }
    questionCount++
    deselectRadio()
    if(questionCount < quizDB.length){
        displayQuestion()
    }
    else{
        showScore.innerHTML = `<h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn1" onclick="location.reload()">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
    }
})