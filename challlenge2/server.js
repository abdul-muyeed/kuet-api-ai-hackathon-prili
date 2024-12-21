import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import Ingredients from "./models/Ingredients.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/ingredients", (req, res) => {
  const ingredients = Ingredients.find();
  res.status(200).send({datat:ingredients, msg:"Ingredients fetched successfully"});
});

app.post("/ingredients", (req, res) => {
  const ingredient = req.body;
  Ingredients.create(ingredient);
  res.status(201).send({ingredient, msg:"Ingredient created successfully"});
});

app.put("/ingredients/:id", (req, res) => {
  const { id } = req.params;
  const ingredient = req.body;
  Ingredients.findByIdAndUpdate(id, ingredient, { new: true });
  res.status(204).send({ingredient, msg:"Ingredient updated successfully"});
});

app.delete("/ingredients/:id", (req, res) => {
  const { id } = req.params;
  Ingredients.findByIdAndRemove(id);
  res.status(200).send({msg:"Ingredient deleted successfully"});
});

mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    console.log("Database connected successfully");
  })
  .catch((error) => console.log("error", error.message));
