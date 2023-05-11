let value = document.querySelectorAll(".ptag")

speed = 200

value.forEach(el => {
    
    let initialValue =+ el.innerHTML
    
    let finalValue = el.dataset.count
    // console.log(finalValue);

    let commonSpeed = Math.floor(finalValue / speed)
    function number(){
        initialValue += commonSpeed
        el.innerHTML = initialValue

        if(initialValue < finalValue) {
            setTimeout(() => {number()} ,1)
        }
    }
    number()
})