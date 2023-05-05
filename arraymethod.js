//  let a = [1,2,3,4,5,6];
//  console.log( "full  array" ,a);

//  a.shift();
//  console.log( "deletion element from first index" ,a);

// a.unshift(7)
// console.log(  "inserting element from first index",a);

// a.pop();
// console.log( "deletion element from last index" ,a);

// a.push(7);
// console.log( "inserting element from last index",a); 


// For concencate two arrays

let e = [1,2];
let w = [3,4];
let w1 = [5,6]
let q =  e.concat(w , w1);
console.log(q);

// To club each element 
// let join = q.join();
// console.log(join);

let w3 =  q.reverse();
console.log(w3);

// To add or delete element in b/w array

let array = [1,2,3,4,5,6,7];
array.splice(6,1,11,12);
console.log(array);