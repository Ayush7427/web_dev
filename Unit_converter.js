const x = document.getElementById("main_heading") 

let name = "Celsius to Fahrenheit Convertor"

    let i = 1

    function type() {
        let new_name = name.slice(0 , i)
        
        x.innerText = new_name

        i > name.length ? i = 1 : i++

        setTimeout(() => {type()} , 200)
    }

    type();


    const bt = document.getElementById("btn")

// btn javascript
bt.addEventListener("click" , () => {
   
    const cel = document.getElementById("val").value

    const far = document.getElementById("val2").value



    console.log(cel);
    console.log(far);

    let a = (cel * 9/5) + 32
    

 
        document.getElementById("sp").innerText = `Celsius to ${cel} Fahrenheit Convert value is ${a}`
   
    
})