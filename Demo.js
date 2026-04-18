//console.log(a);
//let a= 20;

/*let a = 10;  // number
let str = "Hello";  //string
let isok = true;  //boolean
let arr = [1, 2, 3];  //object
let obj = {name:"Dan", age:"20"}; //object
let empty = null;  //object
let b;  //undefined
console.log(typeof b);
console.log(5 === '5');*/
/*
for(i = 0; i < 10; i++) console.log(i);
let j = 10;
while(j < 20) {
    console.log(j);
    j++;
}
x = 20;
do {
    console.log(x);
    x++;
}while(x < 30);
*/

//let arr = [1, 2, 3];
//arr.forEach((element)=>console.log(element));

/*function greet() {
    console.log("Hello");
}
greet();

function add(a, b) { // Simple functions
    console.log(a + b);
}
add(10, 5);*/

// Call Back Basics
function greet() {
  console.log("Welcome");
}

function execute(fn) {
  fn();
}
execute(greet);

//Map method deos not changes its arrays oroginal values rather it generates a new array.
const number = [1, 2, 3, 4];
let newNumber = number.map(function(n){
  return n * 2;
})
console.log(newNumber);

let newNum = number.map(n=>n*3);
console.log(newNum);

//Filter in array
const num = [1, 4, 6, 8];
const newNumb = num.filter(n=>n%2==0);
console.log(newNumb);

const sum = [...num, 5];
console.log(sum);