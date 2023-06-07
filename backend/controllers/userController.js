const user=require("../models/userModels")
const catchAsyncError= require("../middleware/catchAsyncError");


// Register a User
exports.registerUser=catchAsyncError(async(req,resp,next)=>{
 const {name ,email,password}=req.body;
 const User = await user.create({
  name ,email,password,
  avatar:{
    public_id :"this is sample id ",
    url : "profilepicurl"
  }
 });
 const token=User.getJWTToken();



 resp.status(201).json({
    success:true,
    token,
 })
});