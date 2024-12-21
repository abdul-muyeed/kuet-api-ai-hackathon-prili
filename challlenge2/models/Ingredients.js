import mongoose from "mongoose";

const ingredientSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

const Ingredients = mongoose.model("Ingredients", ingredientSchema);
export default Ingredients;
