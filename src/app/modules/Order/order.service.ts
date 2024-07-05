import { ProductModel } from '../Product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderInDB = async (data: TOrder) => {
  const { productId, quantity } = data;
  const isExistsProduct = await ProductModel.findById(productId);
  if (isExistsProduct) {
    const stockQuantity = isExistsProduct?.inventory?.quantity;
    const availableQuantity = stockQuantity - quantity;
    console.log({ stockQuantity, availableQuantity });
    if (availableQuantity < 0) {
      await ProductModel.findByIdAndUpdate(productId, {
        $set: {
          'inventory.quantity': stockQuantity,
          'inventory.isStock': false,
        },
      });
      return {
        message: 'Insufficient quantity available in inventory',
      };
    }
    await ProductModel.findByIdAndUpdate(productId, {
      $set: {
        'inventory.quantity': availableQuantity,
        'inventory.inStock': availableQuantity > 0 ? true : false,
      },
    });
  } else {
    throw Error('Product Not available');
  }
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
