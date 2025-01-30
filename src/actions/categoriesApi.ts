import { instance } from "@/hooks/useAxios";



/**
 * @api {get} Get all categories method
*/
export const getAllCategory = async () => {
    const {data} = await instance.get(`/categories`);
    return data;
}
