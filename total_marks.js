
const bt  = document.getElementById("btn")

bt.addEventListener("click" , () => {
    const math =  Number(document.getElementById("maths").value)

    const comp =  Number(document.getElementById("cs").value)
    
    const english =  Number(document.getElementById("eng").value)
    
    const Phys =  Number(document.getElementById("physic").value)
    
    const ch =  Number(document.getElementById("chemistry").value)

    let grades = ""

    console.log(math);
    console.log(comp);
    console.log(english);
    console.log(Phys);
    console.log(ch );

    // total marks
    let total  = math + comp + english + Phys + ch
    // alert(total)


// percentage
    let perCnetage  = total / 500 * 100
    // alert(perCnetage)


    // grade
    if(perCnetage <= 100 && perCnetage >= 80 ){
        grades = 'A'
    }
    else if(perCnetage <= 79 && perCnetage >= 60 ){
        grades = "B"
    }
    else if(perCnetage <= 59 && perCnetage >= 36 ){
        grades = "C"
    }
    else{
        grades = "D"
    }
    // alert(grades)

    
    // Pass or Fail
    if(perCnetage >= 34){
        document.getElementById("cool").innerText = `Out of 500 your total is ${total}  and pecentage is ${perCnetage}%.  Your Grade is ${grades}. You are PASS `
    }
    else{
        document.getElementById("cool").innerText = `Out of 500 your total is ${total}  and pecentage is ${perCnetage}%.  Your Grade is ${grades}. You are Fail`
    }

  

})