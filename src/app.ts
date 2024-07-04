import express from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/Product/product.router';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello From E-Commerce Server');
});
app.use('/api/products', productRoutes);

export default app;
