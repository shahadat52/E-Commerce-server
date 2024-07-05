import { Request, Response } from 'express';
import { productServices } from './product.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.createProductInDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.getAllProductsFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Products fetched successfully!',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productServices.getSingleProductFromDB(productId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  });
});

const updateSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productServices.updateSingleProductInDB(
    req.body,
    productId,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
});

const deleteSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await productServices.deleteSingleProductFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product deleted successfully!',
    data: null,
  });
});

export const productCollections = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
