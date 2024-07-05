/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderServices } from './order.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result: any = await orderServices.createOrderInDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: result?.message || 'Order created successfully!',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await orderServices.getAllOrdersFromDB();
  res.status(200).json({});

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Orders fetched successfully!',
    data: result,
  });
});

const getOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await orderServices.getOrderFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Orders fetched successfully for user email!',
    data: result,
  });
});

export const orderCollections = {
  createOrder,
  getAllOrders,
  getOrder,
};
