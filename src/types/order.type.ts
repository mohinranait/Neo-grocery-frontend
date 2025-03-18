import { TCartItems } from "./cart.type";

export type TEnhancedCartItem = TCartItems & {
    image: string;
    name: string;
  };

export type TOrderForm = {
  userId?: string;
  shippingAddress?: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
  };
  shippingAddressId?: string;
  items: TEnhancedCartItem[];
  totalAmount: number;
  uid: string;
  email?: string;
  phone: string;
};