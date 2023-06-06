const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(process.env.MONGODB_URI, {
  
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then((data) => {
    console.log(`Connected to MongoDB with server: ${data.connection.host}`);
    // Start your application or perform any further operations
  })
  .catch((err) => {
    console.log(err);
  });
};


module.exports=connectDatabase




// const mongoose = require("mongoose");

// // MongoDB connection string
// // const mongoURI = 'mongo://localhost:270117/Ecommerce';


// const connectDatabase=( )=>{
// // Connect to MongoDB
// mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true})
//   .then((data) => {
//     console.log(`Connected to MongoDB with server: ${data.connection.host}`);
//     // Start your application or perform any further operations
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });


//   }

//   module.exports=mongoose.connect