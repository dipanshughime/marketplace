const express = require("express");
 const app=express();
 
 app.use(express.json())



 //Route inmport

 const product = require("./routes/productRoute");
 const user = require("./routes/userRoute");
 app.use("/api/v1",product);
 app.use("/api/v1",user);
 //middleware
 const errorMiddleware =require("./middleware/error");
 app.use(errorMiddleware);


 
 module.exports=app