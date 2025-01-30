import { instance } from "@/hooks/useAxios";

/**
 * @api {get} Get all attributes method
*/
export const getAllAttributes = async () => {
    const {data} = await instance.get(`/attributes`);
    return data;
}

/**
 * @api {get} Get single attributes BY ID
*/
export const getSingleAttributes = async (id:string) => {
    const {data} = await instance.get(`/attribute/${id}`);
    return data;
}


