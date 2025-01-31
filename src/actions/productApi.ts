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
        throw new Error("Failed to fetch products");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return { success: false, payload: [] };
    }
  };

/**
 * @api {get}  Get Single product by Slug method
*/
export const getSingleProductBySlug = async (slug:string)=>{
    try {
        const response = await fetch(`${SERVER_URL}/view-product/${slug}`,{
            method:"GET",
            headers:{
                "Content-type":"Application/json",
            },
        })
        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }
        return await  response?.json()
    } catch (error) {
        console.error("Error fetching product:", error);
        return { success: false, payload: [] };
    }
}

/**
 * @api {patch} Update prdouct by ID
*/
export const updateProduct = async (id:string, formData:TProduct  ) => {
    const {data} = await instance.patch(`/product/${id}`,{...formData});
    return data;
}

