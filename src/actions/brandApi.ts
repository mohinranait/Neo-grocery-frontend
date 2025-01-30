import { instance } from "@/hooks/useAxios";



/**
 * @api {get} Get all brands method
*/
export const getAllBrands = async () => {
    const {data} = await instance.get(`/brands`);
    return data;
}



