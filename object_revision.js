// let vr = {name : "ayush" , id : 101}
// console.log(vr);

// vr.name = "rana"
// console.log(vr);

// delete vr.name
// console.log(vr);

// second method

function zz(i, n) {
    this.id = i
    this.name  = n 
}

let x = new zz(1011 , "aer")
console.log(x);