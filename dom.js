const min = document.getElementById("dec")

const plus = document.getElementById("inc")

const n = document.getElementById("val")

const res = document.getElementById("res")

let a = 0

plus.addEventListener("click" ,()=> {
a++;
console.log(a);
n.innerHTML = a
})

plus.addEventListener("click" , () =>{
    document.body.style.backgroundColor = randomColor()
})
res.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = randomColor()
})
min.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = randomColor()
})

min.addEventListener("click" ,()=> {
    a--;
    console.log(a);
    n.innerHTML = a
    })

res.addEventListener("click" , () => {
    a = 0;
    console.log(a);
    n.innerText = a
})


function randomColor() {
    let val ="0123456789ABCDEF"
    let has = "#"
    for(let i = 0; i < 6; i++) {
        has  = has + val[Math.floor(Math.random() * 16 )]
    }
    return has;
}



  