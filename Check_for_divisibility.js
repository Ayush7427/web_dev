function aa(n) {

    let s = ""

    for(let i = 1; i <= n; i++) {

        if(i % 3 == 0 && i % 2 != 0){

            s = s + i

        }

        s = s + " "
    }

return s

}

let a = aa(100)

console.log(a);