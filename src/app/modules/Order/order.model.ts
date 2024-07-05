import mongoose, { Schema, Types } from 'mongoose';
import { Order, TOrder } from './order.interface';
import { ProductModel } from '../Product/product.model';

export const orderSchema = new Schema<TOrder, Order>(
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

// orderSchema.pre('save', async function (next) {
//     const id = this.productId
// })

orderSchema.statics.isProductQuantityExists = async function (
  id: Types.ObjectId,
) {
  return await ProductModel.findById(id);
};

export const OrderModel = mongoose.model<TOrder, Order>('order', orderSchema);
