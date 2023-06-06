const express = require("express");
 const app=express();
 
 app.use(express.json())



 //Route inmport

 const product = require("./routes/productRoute");
 app.use("/api/v1",product);

 //middleware
 const errorMiddleware =require("./middleware/error");
 app.use(errorMiddleware);


 
 module.exports=app