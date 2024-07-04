import express from 'express';
import { productRoutes } from '../modules/Product/product.router';
import { orderRoutes } from '../modules/Order/order.router';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/products',
    router: productRoutes,
  },
  {
    path: '/orders',
    router: orderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
