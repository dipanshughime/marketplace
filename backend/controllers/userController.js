const User=require("../models/userModels")
const catchAsyncError= require("../middleware/catchAsyncError");
const ErrorHander = require("../utils/errorhandler");

// Register a User
exports.registerUser=catchAsyncError(async(req,res,next)=>{
 const {name ,email,password}=req.body;
 const user = await User.create({
  name ,email,password,
  avatar:{
    public_id :"this is sample id ",
    url : "profilepicurl"
  }
 });
 const token=user.getJWTToken();
 res.status(201).json({
  success:true,
  token,
})
});


 // login user
 exports.loginUser=catchAsyncError(async(req,res,next)=>{
  const {email,password}=req.body;
  
  // check if user has given password and email
  
  if(!password || !email){
    return next( new ErrorHander ( "Please Enter email and password ",400));
  }
 const user = await User.findOne({email}).select("+password");

 if(!User){
  return next(new ErrorHander("Invalid email or password",401));
 }
 const ispasswordMatched = await user.comparePassword(password);
 if(!ispasswordMatched){
  return next(new ErrorHander("Invalid email or password",401)); 
 } 
 
 token=user.getJWTToken();
 res.status(201).json({
   success:true,
   token,
  })
  
});

