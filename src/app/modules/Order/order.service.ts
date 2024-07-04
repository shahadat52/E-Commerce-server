import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderInDB = async (data: TOrder) => {
  const result = await OrderModel.create(data);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderFromDB = async (param: Record<string, unknown>) => {
  if (!param?.email) {
    const result = await OrderModel.find();
    return result;
  }

  const result = await OrderModel.find({ email: param.email });
  return result;
};

export const orderServices = {
  createOrderInDB,
  getAllOrdersFromDB,
  getOrderFromDB,
};
