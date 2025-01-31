import { SERVER_URL } from "@/helpers/secretVariable";
import { instance } from "@/hooks/useAxios";
import { TProduct } from "@/types/product.type";



/**
 * @api {get} Get all products method
*/
export const getAllProducts = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return { success: false, payload: [] };
    }
  };

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

