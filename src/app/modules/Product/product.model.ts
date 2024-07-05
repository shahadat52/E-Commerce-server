import mongoose, { Schema } from 'mongoose';
import { TInventory, TProduct, TVariants } from './product.interface';

const variantSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: [true, 'Product "Variant Type" is Required'],
  },
  value: {
    type: String,
    required: [true, 'Product "Variant Type" is Required'],
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    default: 0,
  },
  inStock: {
    type: Boolean,
    default: false,
  },
});

export const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product "Name" is Required'],
    },
    description: {
      type: String,
      required: [true, 'Product "Description" is Required'],
    },
    category: {
      type: String,
      required: [true, 'Product "Category" is Required'],
    },
    price: {
      type: Number,
      required: [true, 'Product "Price" is Required'],
    },
    tags: {
      type: [String],
      required: [true, 'Product "Tags" is Required'],
    },
    variants: {
      type: [variantSchema],
      required: [true, 'Product "Variant" is Required'],
      _id: false,
    },
    inventory: {
      type: inventorySchema,
      required: [true, 'Product "Inventory" is Required'],
      _id: false,
    },
  },
  { timestamps: true },
);

export const ProductModel = mongoose.model('product', productSchema);
