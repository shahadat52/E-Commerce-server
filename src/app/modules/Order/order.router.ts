import express from 'express';
import { orderCollections } from './order.collection';

const router = express.Router();

router.post('/', orderCollections.createOrder);
router.get('/', orderCollections.getOrder);

export const orderRoutes = router;
