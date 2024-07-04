import mongoose, { Schema } from 'mongoose';
import { TOrder } from './order.interface';

export const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Customer "Email" is required'],
    },
    productId: {
      type: Schema.Types.ObjectId,
      required: [true, '"ProductId" is required'],
      ref: 'product',
    },
    price: {
      type: Number,
      required: [true, 'Product Price is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product "Quantity" is required'],
    },
  },
  { timestamps: true },
);

export const OrderModel = mongoose.model('order', orderSchema);
