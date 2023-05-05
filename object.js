let obj = {id : 100 , name : "qwerty" , salary : 1900000}
console.log(obj);


// second step to declare an object 
function obj1(i , n , s) {
    this.id = i
    this.name = n
    this.salary = s;
}

let x = new obj1(102 , "ayush" ,789000)
console.log(x);

// to print an value stored in an object
console.log(obj.id);
 
// to update an value
obj.id = 16
console.log(obj);