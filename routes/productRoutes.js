const router = require("express").Router();
const { Product}= require("../models/product");

routes.get('/',(req,res) =>{
    product.find()
     .populate("_category")


     .exec()
     .then((data, error) =>{
        if(error) return res.status(400).json({status: false, error});
        return res.status(200).json({
            status:true,
            message: "Get Product successfully",
            data,
        });
    });
});

router.post("/create",(res,req) => {
    const product=new Product(req.body);
    category.save((errordata)) ; { 
        if(error) return res.status(400).json({status: false, error});
        return res.status(200).json({
            status:true,
            message: " Product has been  added successfully",
            data,
        });
    };
});

module.exports=router;