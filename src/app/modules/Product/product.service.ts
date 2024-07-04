import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model"

const createProductInDB = async (data: TProduct) => {
    const result = await ProductModel.create(data)
    console.log({ result });

    return result
};

export const productServices = {
    createProductInDB
}

