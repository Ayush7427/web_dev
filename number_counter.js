const myNum = document.querySelectorAll(".count")
// console.log(myNum);

let speed = 100
myNum.forEach(( myCount) =>{


let target_count = myCount.dataset.count

let init_count =+ myCount.innerText

//    console.log(target_count);

let increment_Number = Math.floor(target_count / speed)

   const updateNumber = () =>{
    init_count = init_count + increment_Number
    myCount.innerText = init_count
    if(init_count < target_count) {
        setTimeout(() => {updateNumber()} , 25)
    }
   
   }
   updateNumber();
})