import { TRegisterType } from "@/components/forms/RegisterForm";
import { TVerifyEmailType } from "@/components/forms/VerifyForm";
import { instance } from "@/hooks/useAxios";

/**
 * Create new user
*/
export const userRegister = async (formData:TRegisterType) => {
    const {data} = await instance.post(`/user/create`, { ...formData  });
    return data;
}

/**
 * User login method
*/
export const userLogin = async (formData:{email:string;password:string}) => {
    const {data} = await instance.post(`/user/login`, { ...formData  });
    return data;
}

/**
 * User logout method
*/
export const userLogout = async () => {
    const {data} = await instance.post(`/user/logout`);
    return data;
}

/**
 * @api {post} user -> Verify user email 
*/
export const verifyEmailAccount = async (formData:TVerifyEmailType) => {
    const {data} = await instance.post(`/user`,{...formData});
    return data;
}