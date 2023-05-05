


function tree(x) {
    const economy = 4000
    const Midsizq = 10000
    const luxury = 20000
    const days = 1
    let str = ""
    if(economy == x){
        str = economy * days
    }
    else if(Midsizq == x){
        str = Midsizq * days
    }
    else if(luxury == x) {
        str = luxury * days
    }
    return str
    }
    
    let a = tree(20000);
    console.log(a);