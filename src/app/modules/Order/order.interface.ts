/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type TOrder = {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};

export interface Order extends Model<TOrder> {
  isProductQuantityExists(id: string): Promise<TOrder | null>;
}
