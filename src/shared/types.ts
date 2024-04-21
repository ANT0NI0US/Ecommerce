export enum selectedPageNum {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface setSelectedPageProps {
  setSelectedPage: (page: selectedPageNum) => void;
}

export interface selectedProps extends setSelectedPageProps {
  selectedPage: selectedPageNum;
}

export interface Review {
  rating: number | null;
  text: string;
}

export interface productCardProps {
  id: string;
  productName: string;
  imgUrl: string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  reviews?: Review[];
  avgRating?: number;
}
export interface newProductProps {
  id?: string;
  productName: string;
  imgUrl: File | null | string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  reviews?: Review[];
  avgRating?: number;
}

export interface Item {
  id: string | undefined;
  productName: string;
  imgUrl: string | File | null;
  price: number;
}

export interface CartItem extends Item {
  quantity?: number;
  totalPrice?: number;
}

export interface CartState {
  cartItems: CartItem[];
  totalAmount: number;
  totalQuantity: number;
  perfectItems: Item[];
  totalFavouriteItemsQuantity: number;
}

export interface cartSliceState {
  cart: CartState;
}

export interface clockProps {
  label: string;
}

// admin

// dashboard
export interface serviceProps {
  title: string;
  bg: string;
}

// all users
export interface userProps {
  id: string;
  displayName: string;
  email: string;
  photoURL: string;
  type: "admin" | "user";
  uid?: string;
}

export interface userServiceState {
  isLoading: boolean;
  user: userProps | object;
  errors: string | null;
  allUsers: userProps[];
}

export interface userState {
  user: userServiceState;
}

// all products
export interface productServiceState {
  isLoading: boolean;
  product: newProductProps | object;
  errors: null | string;
  allProducts: newProductProps[];
}
export interface productState {
  product: productServiceState;
}

// all orders
export interface ordersFireBase {
  id?: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  code: string;
  country: string;
  items: CartItem[];
  itemsAmount: number;
  itemsQuantity: number;
  email: string;
  userId: string;
  userPhoto: string;
}
export interface order {
  Name: string;
  Phone: string;
  Address: string;
  City: string;
  Code: string;
  Country: string;
}
export interface newOrderProps extends order {
  id?: string;
  cartItems: CartItem[];
  totalAmount: number;
  totalQuantity: number;
  email: string;
  uid: string;
  photoURL: string;
}

export interface orderServiceState {
  isLoading: boolean;
  errors: null | string;
  order: ordersFireBase | object;
  allOrders: ordersFireBase[];
}
export interface orderState {
  order: orderServiceState;
}
