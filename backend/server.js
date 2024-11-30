// -----------readinG PROGRAM----------------//
// const fs=require('fs')

// fs.readFile('one.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data);
// })


// -------------writing PROGRAM--------------//
// const fs=require('fs')

// fs.writeFile('one.txt','adding data to one.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("fill created successfully");
// })


// -------------EXAMPLE PROGRAM---------//
// const http=require('http')
// const PORT=5500;
// const myServer=http.createServer((request,response)=>{
//     response.write("welcome to http modulre");
//     response.write("this is my second statement")
//     response.end();
// })
// myServer.listen(PORT,()=>{
//     console.log(`My Server is running on PORT ${PORT} number`)
// });


// ------ASYNCHRONOUS EXAMPLE PROGRAM---------//
// const fs=require('fs');
// console.log("This is my First Statement")
// fs.readFile("one.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
// console.log("this is my second statement")


// ------------Synchronous example-----------//
// const fs=require('fs');
// console.log("This is my First Statement");
// const result=fs.readFileSync("one.txt",'utf-8');
// console.log(result);
// console.log("this is my second statement")


// -----------add,sub,mul by using Test.js------------//
const {add,sub,mul}=require('./Test')
console.log("addition of two numbers is=")
console.log(add(10,20));
console.log("subtraction of two numbers is=")
console.log(sub(30,20));
console.log("multiplication of two numbers is=")
console.log(mul(5,20));