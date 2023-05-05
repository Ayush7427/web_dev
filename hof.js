// hof
const powertwo = (n) => {
    return n ** 2
}

// console.log(powertwo(3));

function powerCube(powertwo , n) {
    return powertwo(n) * n
}
console.log(powerCube(powertwo , 3));




// fUnction ko return kiya hai
function hello(){
    return () => {
        console.log("Ayush Rana");
    }
}
let guessValue = hello()
console.log(guessValue);
guessValue()



// fxn kai Andhar fxn

const higherOrder = n => {
    const oneFun = m => {
        const twoFun = o => {
            return n + m + o
        }
        return twoFun
    }
    return oneFun
}

console.log( higherOrder (2) (3) (4) ); 


// set interval

function one() {
    console.log("Ayush Rana !",Math.random());
}
setInterval(one ,  2000)