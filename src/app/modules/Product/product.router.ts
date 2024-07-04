import express from "express";
import { productCollections } from "./product.controller";

const router = express.Router();
const order = express.Router();

router.post('/', productCollections.createProduct)

export const productRoutes = router
export const orderRoutes = order