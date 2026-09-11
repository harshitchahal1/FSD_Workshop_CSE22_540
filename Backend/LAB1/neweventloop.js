console.log("This is the starting point of my code");
// process.nextTick(() => {
//     console.log("This is process.nextTick code");
// })

setTimeout(() => {
   console.log("This is first timeout funciton");
},2000);

setTimeout(() => {
   console.log("This is second timeout funciton");
},5000);

// setTimeout( useCallback,delay)
setTimeout(()=>{
   console.log("This statement will run after zero delay");
},0)

setImmediate(()=>{
   console.log("This is immidiate statement");
})

process.nextTick(() => {
    console.log("This is process.nextTick code");
})

new Promise((resolve, reject) => {
   let success = false;

   if (success)
      resolve("Data loaded successfully");
   else
      reject("Something went wrong");
})
.then((result) => {
   console.log(result);
})
.catch((err) => {
   console.log(err);
});



// new Promise((resolve,reject)=>{
//    console.log()
// })
//   .then((result) => console.log(result))

console.log("This is the end point of my code");