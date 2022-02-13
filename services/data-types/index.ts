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

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  phoneNumber: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface TopUpCategoriesTypes extends CategoryTypes {
  value: number;
}

export interface HistoryVoucherTopupTypes extends NominalsTypes {
  gameName: string;
  category: string;
  thumbnail: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  value: number;
  status: string;
}
