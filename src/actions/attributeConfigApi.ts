import { instance } from "@/hooks/useAxios";


/**
 * @api {get} Get all attributes configs method
*/
export const getAllAttributeConfigs = async (id:string) => {
    const {data} = await instance.get(`/config-attributes/${id}`);
    return data;
}


