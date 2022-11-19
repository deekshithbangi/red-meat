const mongoose = require("mongoose");

const categorySchema = mangoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:String,
    }
})       

const Category = mongoose.model("categories",categorySchema);
module.exports = Category;
