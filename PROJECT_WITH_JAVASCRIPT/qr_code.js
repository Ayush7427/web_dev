
const btn = document.getElementById("bt")
let result = document.querySelector(".qrCode")

btn.addEventListener("click" , () => {

 
    let input = document.getElementById("input").value

    if(input == ""){
        alert("Enter url") 
      }
       
      else{
        result.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
        console.log(result.src);
      }
})


