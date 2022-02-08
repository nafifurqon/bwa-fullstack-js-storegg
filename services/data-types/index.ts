export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
    status: string;
    _id: string;
    name: string;
    category: CategoryTypes;
    thumbnail: string;
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  accountNumber: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
  __v: number;
}
