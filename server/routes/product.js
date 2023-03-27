import express from "express";
import Product from "../models/Product.js";
const router = express.Router();

router.get("/products", async (request, response) => {
  try {
    const products = await Product.find();
    response.status(200).json(products);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});
export default router;
