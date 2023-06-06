const ErrorHander =require("../utils/errorhandler");

module.exports=(err,req,resp,next)=>{
    err.statuscode=err.statuscode||500;
    err.message=err.message||"internal server error";
    


    //wrong Mongodb id error
    if(err.name=== "castError"){
        const message = `resource not found , Invalid :${err.path}`;
        err =new ErrorHander(message,400);
    }

    resp.status( err.statuscode).json({
        success:false,
        message:err.message,
     
    });
};