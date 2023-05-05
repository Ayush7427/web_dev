let inp = document.getElementById("place").value

const bt = document.getElementById("btn")


bt.addEventListener("click" , () => {

let x = document.createElement("li")

x.textContent = document.getElementById("place").value

document.body.style.color = "#131350d5";
x.style.fontSize = "15px"
x.style.fontWeight = 700
x.style.listStyle = "none"
x.style.padding =" 5px 10px"
x.style.marginBottom = "5px"

console.log(x.textContent);

document.body.appendChild(x)

})