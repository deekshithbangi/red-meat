const mangoose = require("mangoose");

const categorySchema = mangoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:String,
    }
})       

const Category = mangoose.model("categories",categorySchema);
module.exports = Category;
