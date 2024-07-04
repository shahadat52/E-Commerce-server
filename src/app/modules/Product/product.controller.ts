import { Request, Response } from "express"
import { productServices } from "./product.service"

const createProduct = async (req: Request, res: Response) => {
    const result = await productServices.createProductInDB(req.body)

    res.status(500).json({
        "success": true,
        "message": "Product created successfully!",
        data: result
    })
};

export const productCollections = {
    createProduct
}