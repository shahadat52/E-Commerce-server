import express from 'express';
import { orderCollections } from './order.collection';
import validateRequest from '../../middleware/validateRequest';
import { orderValidations } from './order.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(orderValidations.orderValidationSchema),
  orderCollections.createOrder,
);
router.get('/', orderCollections.getOrder);

export const orderRoutes = router;
