let change = document.getElementById("qw")

let btn = document.getElementById("log")

btn.addEventListener("click" , () => {

let pass = document.getElementById("name").value

let cnfpass = document.getElementById("pass").value

console.log(pass);
console.log(cnfpass); 

    if(pass.length != 0 && pass.length >= 8){
        if(pass == cnfpass){
            change.innerText = "login"
            change.style.color = "#228b22"
        }
        else{
            change.innerText = "Password doesn't Match"
            change.style.color = "#ff0000"
        }
    }
    else{
        alert("Enter Password , Password must contain minimum 8 digit")
    }
})