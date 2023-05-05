
const bt = document.getElementById("btn")

bt.addEventListener("click" , () => {
    const val1 = document.getElementById("col").value

    const val2 = document.getElementById("color").value

    console.log(val1);
    console.log(val2);

    // color changer
    if(val1 == "red" && val2 == "blue" ){
        document.body.style.backgroundColor = "#800080"
    }
    else if(val1 == "red" && val2 == "yellow" ){
        document.body.style.backgroundColor = "#ffa500"
    }
    else if(val1 == "blue" && val2 == "yellow" ){
        document.body.style.backgroundColor = "#008000"
    }
    else{
        document.body.style.backgroundColor = "#ffffff"
    }
    
})


