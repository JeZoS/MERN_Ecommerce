import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

//get all products
router.route("/").get(getProducts);

//get product by id
router.route("/:id").get(getProductById);

export default router;
