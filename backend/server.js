const app = require("./app");

const dotenv =require("dotenv");
const connectDatabase=require('./config/database');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

  
// config

dotenv.config({path:"backend/config/config.env"});


// connecting to database
connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log( `server is working on http://localhost:${process.env.PORT}`)
})



//unhandle Promises Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to unhandled promises rejection`);

    serve.close(()=>{
      process.exit(1);  
    });
});