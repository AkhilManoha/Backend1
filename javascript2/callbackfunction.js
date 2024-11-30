function greet(name, callback){
    console.log(name)
    callback();
   }
   function welcome()
   {
    console.log("this is a callback function")
   }
   greet("gnit", welcome);