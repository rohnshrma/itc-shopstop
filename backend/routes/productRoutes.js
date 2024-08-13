import express from "express";
import Product from "../models/productModel.js";
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (err) {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
