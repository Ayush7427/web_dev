
const bt =  document.getElementById("btn")

bt.addEventListener("click" , () => {

    const inp =  document.getElementById("input").value

    console.log(inp);

    let imp = inp.charAt(0).toUpperCase() + inp.slice(1)

console.log(imp);

    alert(imp)
 
})