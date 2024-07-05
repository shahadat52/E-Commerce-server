import express from 'express';
import cors from 'cors';
import router from './app/router';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello From E-Commerce Server');
});
app.use('/api', router);

app.use(globalErrorHandler);
app.use(notFound);
export default app;
