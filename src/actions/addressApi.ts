import { SERVER_URL } from "@/helpers/secretVariable";
import { TAddress } from "@/types/address.type";

/**
 * @api {post} create a new address method
*/
export const createAddressByAuthUser = async ({addressData}:{addressData:TAddress}) => {
    try {
        const response = await fetch(`${SERVER_URL}/address`,{
            method:"POST",
            headers:{
                "Content-type":"Application/json",
            },
            body: JSON.stringify(addressData),
            credentials: 'include',
        })
        if (!response.ok) {
            throw new Error("Failed to create address");
        }
        return  await  response?.json()
       
    } catch (error) {
        console.error("Error create address:", error);
        return { success: false, payload: [] };
    }
}


/**
 * @api {get} Get all address method
*/
export const getAllAddressByAuthUser = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/address`,{
            method:"GET",
            headers:{
                "Content-type":"Application/json",
            },
            credentials: 'include',
            cache:'no-store'
        })
        if (!response.ok) {
            throw new Error("Failed to fetch address");
        }
        return  await  response?.json()
       
    } catch (error) {
        console.error("Error fetching address:", error);
        return { success: false, payload: [] };
    }
}
