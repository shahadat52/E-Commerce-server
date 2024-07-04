import express from 'express';
import { productCollections } from './product.controller';

const router = express.Router();

router.post('/', productCollections.createProduct);
router.get('/', productCollections.getAllProducts);
router.get('/:productId', productCollections.getSingleProduct);
router.put('/:productId', productCollections.updateSingleProduct);
router.delete('/:id', productCollections.deleteSingleProduct);

export const productRoutes = router;
