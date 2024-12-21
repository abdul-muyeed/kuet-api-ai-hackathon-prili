import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



const PORT = process.env.PORT || 3000;


app.get('/ingredients', (req, res) => {
    res.json(ingredients);
  });

















mongoose.connect(process.env.MONGOOSE_URI).then(() =>{
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  })
  .catch((error) => console.log('error',error.message));