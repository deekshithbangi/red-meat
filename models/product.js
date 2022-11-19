const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type:String
    },
    _category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    image: {
        type:String
    },
    price: {
        type: Number,
        default: 0
    },
});     

const Product = mongoose.model("Product",ProductSchema);
module.exports = { Product };