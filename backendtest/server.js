// -------------get,getAll,put,Delete,post code-----------------//
// const express=require("express")
// const app=express();

// const PORT=6666;
// app.get("/get",(request,response)=>{
//     response.send("Welcome to GNIT college")
// })
// app.get("/getAll",(request,response)=>{
//     response.json("It is getAll end point")
// })
// app.post("/post",(request,response)=>{
//     response.send("this is post method")
// })
// app.put("/put",(request,response)=>{
//     response.send("This is put method")
// })
// app.delete("/delete",(request,response)=>{
//     response.send("This is delete method")
// })
// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`)
// })

const express = require("express");
const users = require("./Users.json");  // Ensure this file is in the same directory
const app = express();

const PORT = 6666;

// Get all users
app.get("/users", (request, response) => {
    return response.json(users);
});

// Get a single user by userId
app.get("/users/:userId", (request, response) => {
    const userId = Number(request.params.userId);

    // Find the user with the given userId
    const user = users.find((user) => user.userId === userId);

    // If no user is found, return a 404 error
    if (!user) {
        return response.status(404).json({ message: "User not found" });
    }

    // If user is found, return the user data
    return response.json(user);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});