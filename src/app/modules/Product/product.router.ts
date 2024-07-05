import express from 'express';
import { productCollections } from './product.controller';
import validateRequest from '../../middleware/validateRequest';
import { productValidations } from './product.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(productValidations.createProductValidationSchema),
  productCollections.createProduct,
);
router.get('/', productCollections.getAllProducts);
router.get('/:productId', productCollections.getSingleProduct);
router.put(
  '/:productId',
  validateRequest(productValidations.updateProductValidationSchema),
  productCollections.updateSingleProduct,
);
router.delete('/:id', productCollections.deleteSingleProduct);

export const productRoutes = router;
