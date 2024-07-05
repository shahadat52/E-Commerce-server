/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderServices } from './order.service';
import catchAsync from '../../utils/catchAsync';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result: any = await orderServices.createOrderInDB(req.body);

  res.status(200).json({
    success: true,
    message: result?.message || 'Order created successfully!',
    data: result,
  });
});

const getAllOrders = async (req: Request, res: Response) => {
  const result = await orderServices.getAllOrdersFromDB();
  res.status(200).json({
    success: true,
    message: 'Orders fetched successfully!',
    data: result,
  });
};

const getOrder = async (req: Request, res: Response) => {
  const result = await orderServices.getOrderFromDB(req.query);
  res.status(200).json({
    success: true,
    message: 'Orders fetched successfully for user email!',
    data: result,
  });
};

export const orderCollections = {
  createOrder,
  getAllOrders,
  getOrder,
};
