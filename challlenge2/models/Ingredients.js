import mongoose from "mongoose";    


const ingredientSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    image: String
})

const Ingredients = mongoose.model('Ingredients', ingredientSchema);
export default Ingredients;