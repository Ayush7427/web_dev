// const btn = document.getElementById("button")
// const randomColor = () => {

//     let val = "0123456789ABCDEF" ;
//     let cons = "#"

//     for(let i = 0; i < 6; i++) {
//         cons = cons + val[Math.floor(Math.random() * 16)]
//     }
//     return cons;
// };

// console.log( randomColor() );

// function changecolor() {
//     document.body.style.backgroundColor = randomColor()
// }

// btn.addEventListener("click" , changecolor)


let btn =  document.getElementById("button")

btn.addEventListener("click" , color)

function color() {
    document.body.style.backgroundColor = randomColor()
}

function randomColor() {
    let val ="0123456789ABCDEF"
    let has = "#"
    for(let i = 0; i < 6; i++) {
        has  = has + val[Math.floor(Math.random() * 16 )]
    }
    return has;
}