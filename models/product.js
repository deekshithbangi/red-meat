const mangoose = require("mangoose");

const ProductSchema = mangoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type:String
    },
    _category: {
        type: mangoose.Schema.Types.ObjectId,
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

const Product = mangoose.model("Product",ProductSchema);
module.exports = { Product };