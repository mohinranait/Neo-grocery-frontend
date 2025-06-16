import { TAddress } from "./address.type";
import { TCartItems } from "./cart.type";

export type TEnhancedCartItem = TCartItems & {
    image: string;
    name: string;
  };

export type TOrderForm = {
  userId?: string;
  shippingAddress?: TAddress;
  shippingAddressId?: string;
  items: TEnhancedCartItem[];
  totalAmount: number;
  uid: string;
  email?: string;
  phone: string;
};