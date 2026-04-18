const obj = {name:"Dennis"};
console.log(obj.name);
obj.name = "Ritchie";
console.log(obj.name);

//function with expression
const factorial = function(n) {
    if(n == 1 || n == 0) return 1;
    else return n * factorial(n - 1);
}
console.log(factorial(5));

function fibnocci(n) {
    let n1 = 0, n2 = 1;
    let sum;
    if(n == 1) return n1;
    else if(n == 2) return n2;
    else {
        for(let i = 3; i <= n; i++) {
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
        return sum;
    }
}
console.log(fibnocci(3));

const fibnocci1 = function(n) {
    let n1 = 0, n2 = 1;
    let sum;
    if(n == 1) return n1;
    else if(n == 2) return n2;
    else {
        for(let i = 3; i <= n; i++) {
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
        return sum;
    }
}
console.log(fibnocci1(3));

const sales = "Toyota";
function Types(name) {
    return name === "Honda" ? name : "Sorry";
}
const car = {myCar:"saturn", getCar:Types("Honda"), special:sales};  
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

const student = {name:"Rom", age:21, hobby:"Cricket"};
for(const key in student) {
    console.log(key, student[key]);
    //console.log(student[key]);
}

arr = ["red", "blue", "green", "yellow"];
for(const i in arr) {
    console.log(i, arr[i]);
}
/*
for(const i in arr) {
    console.log(arr[i]);
}
*/
//forIn is used sepcially for objects and indices and forOf is used when we need values 
const fruits = ["Apple", "Banana", "Litchi"];
for(const fruit of fruits) {
    console.log(fruit);
}
let cnt = 0;
for(const char of "JavaScript") {
    if(char === "a" || char === "e" || char == "i" || char === "o" || char === "u") cnt++;
}
console.log(cnt);

const colors = ["Red", "green", "yellow"];
for(const[index, color] of colors.entries()) {
    console.log(index, color);
}