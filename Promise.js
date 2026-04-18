// // Synchrounous Programming
// console.log("Begin");
// console.log("Data initiated");
// console.log("End");

// // Asynchronous Progamming
// // Promise is come to handle callback and callback hell
// // Callback means calling a function in another function
// // Callback heirarchy is known as callback hell
// console.log("Begin");
// function getData(callback) {
//   setTimeout(() => {console.log("Data initiated");}, 2000);
// }
// getData(function(result) {
//   console.log(result);
// })
// console.log("End");

// let Promise = new Promise((resolve, reject) => {
//   let success = true;
//   if(success) resolve("Promise resolved");
//   else reject("Error");
// })

// Jab promise return ho kr aata h to then() and catch() use hota h
// fetch is a method to connect with API's
fetch(" https://jsonplaceholder.typicode.com/users ")
.then(response=>response.json())
.then(user=>{
  user.forEach(element => {
    console.log(element.name);
  });
})
.catch(error=>console.log(error));

//axios is a library
axios.get("https://jsonplaceholder.typicode.com/users")
.then(data=>console.log(data))
.catch(error=>console.log(error))

//async-await
async function fetchData(){
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
  }
  catch(exception e) {

  }
}