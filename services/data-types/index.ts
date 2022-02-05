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
