/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductInDB = async (data: TProduct) => {
  const result = await ProductModel.create(data);

  return result;
};

const getAllProductsFromDB = async (params: Record<string, unknown>) => {
  if (params.searchTerm) {
    const result = await ProductModel.find({
      $or: [
        { name: { $regex: params?.searchTerm, $options: 'i' } },
        { tags: { $regex: params?.searchTerm, $options: 'i' } },
      ],
    });
    return result;
  }

  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.find({ id });

  return result;
};

const updateSingleProductInDB = async (data: Partial<TProduct>, id: string) => {
  // console.log({ data, id });
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true },
  );

  return result;
};
const deleteSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);

  return result;
};

export const productServices = {
  createProductInDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductInDB,
  deleteSingleProductFromDB,
};
