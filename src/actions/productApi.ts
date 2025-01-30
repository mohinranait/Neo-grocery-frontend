import { instance } from "@/hooks/useAxios";
import { TProduct } from "@/types/product.type";



/**
 * @api {get} Get all products method
*/
export const getAllProducts = async (query:string) => {
    const {data} = await instance.get(`/products${query && '?'+query }`);
    return data;
}

/**
 * @api {get}  Get Single product by Slug method
*/
export const getSingleProductBySlug = async (slug:string) => {
    const {data} = await instance.get(`/view-product/${slug}`);
    return data;
}

/**
 * @api {patch} Update prdouct by ID
*/
export const updateProduct = async (id:string, formData:TProduct  ) => {
    const {data} = await instance.patch(`/product/${id}`,{...formData});
    return data;
}

