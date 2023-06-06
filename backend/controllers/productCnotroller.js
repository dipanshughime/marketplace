const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../models/productModels"); 
const ApiFeatures = require("../utils/apifeatures");
const ErrorHander = require("../utils/errorhandler");

//create product---admine

exports.createProduct=catchAsyncError(async(req,resp,next)=>{
    const product =await Product.create(req.body);
    resp.status(201).json(
      {
          success:true,
          product
      }
    )
  });

//get all products
exports.getAllProduct =catchAsyncError(async(req,resp)=>{

const apiFeatures = new  ApiFeatures(Product.find(),req.query).search().filter();


    const product= await apiFeatures.query;
    resp.status(201).json(
        {
            success:true,
            product
        }
      )
});

// get product details
exports.getProductDetails=catchAsyncError(async(req,resp,next)=>{
    let product = await Product.findById(req.params.id) ;
    if(!product){
        return next(new ErrorHander("Product not found",404));
        // return resp.status(500).json({
        //     success:false,
        //     message:"Product not found"
        // })
    }
    resp.status(200).json({
        success:true,
        product
    }

    )
});



// update product--admin
exports.updateProduct=catchAsyncError(async(req,resp,next)=>{
    let product = await Product.findById(req.params.id) ;

    if(!product){
        return resp.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product. findByIdAndUpdate (req.params.id,req.body, {
        new: true,
        runValidators :true, 
        useFindAndModify:false
    });
    resp.status(200).json({
        success:true,
        product
    }

    )
});
 

//Delete Product--admin

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found"
      });
    }
  
    await Product.deleteOne({ _id: req.params.id });

  
    res.status(200).json({
      success: true,
      message: "Product deleted"
    });
  });
  