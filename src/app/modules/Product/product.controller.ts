import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  const result = await productServices.createProductInDB(req.body);

  res.status(200).json({
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {

  const result = await productServices.getAllProductsFromDB(req.query);

  res.status(200).json({
    success: true,
    message: 'Products fetched successfully!',
    data: result,
  });
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productServices.getSingleProductFromDB(productId);

  res.status(200).json({
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  });
};

const updateSingleProduct = async (req: Request, res: Response) => {
  const data = req.body;
  const { productId } = req.params;
  const result = await productServices.updateSingleProductInDB(data, productId);

  res.status(200).json({
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  await productServices.deleteSingleProductFromDB(id);

  res.status(200).json({
    success: true,
    message: 'Product deleted successfully!',
    data: null,
  });
};

export const productCollections = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
