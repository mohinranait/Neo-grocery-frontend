export type TAddress = {
    userId: string,
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
    city: string,
    postalCode: string,
    type : "Home" |'Office'|'Others'
}


export type TAddressResponse = TAddress & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};