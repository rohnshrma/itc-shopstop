import dotenv from "dotenv";
import express from "express";
import products from "./data/products.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json("API RUNNING");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
