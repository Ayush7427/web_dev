const quizDB = [{
    question : "Q1) What do you call a computer on a network that requests files from another computer?",
    a : "A client", 
    b : "A host" ,
    c : " A router" , 
    d : "A web server" ,
    ans : "ans1"
} ,
{
    question : "Q2) Hardware devices that are not part of the main computer system and are often added later to the system.",
    a : "Peripheral", 
    b : " Clip art" ,
    c : " Highlight",
    d : "Execute" , 
    ans : "ans1"
},
{
    question : "Q3) Which of the following is not JavaScript Data Types?",
    a : "Undefined",
    b : " Number" ,
    c : "Boolean" ,
    d : "Float" ,
    ans : "ans4"
},
{
    question : "Q4) The main computer that stores the files that can be sent to computers that are networked together is",
    a : "Clip art",
    b : " Mother board" ,
    c : " Peripheral" ,
    d : "File server" ,
    ans : "ans4"
},
{
    question : "Q5) Google (www.google.com) is a:",
    a : "Clip art",
    b : " Search Engine" ,
    c : " Directory of images" ,
    d : "File server" ,
    ans : "ans2"
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