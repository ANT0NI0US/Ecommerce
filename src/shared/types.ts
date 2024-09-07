/*----------------------------------------  AUTHANTICATION ----------------------------------------*/
export interface loginServiceState {
  isLoading: boolean;
  user: userProps | object;
  errors: string | null;
  isAdmin: boolean;
  isAuthenticated: boolean | undefined;
  token: string | null;
}

export interface loginState {
  login: loginServiceState;
}
/*----------------------------------------  NAVBAR + FOOTER ----------------------------------------*/
export interface arrLinks {
  path: string;
  text: string;
}
/*----------------------------------------  NAVBAR + FOOTER ----------------------------------------*/
export interface Review {
  rating: number | null;
  text: string;
  name?: string;
}

export interface Item {
  id: string;
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
/*----------------------------------------  ADMIN ----------------------------------------*/
/* ALL USERS */
export interface userProps {
  id?: string;
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

/* ALL PRODUCTS */
export interface productServiceState {
  isLoading: boolean;
  product: newProductProps | object;
  errors: null | string;
  allProducts: newProductProps[];
}

export interface productState {
  product: productServiceState;
}

/* ALL ORDERS */
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
  isCertainOrderLoading: boolean;
  errors: null | string;
  order: ordersFireBase | object;
  allOrders: ordersFireBase[];
}

export interface orderState {
  order: orderServiceState;
}
/*----------------------------------------  UI ----------------------------------------*/
/*  WIDGETS */
export interface widgetProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface WidgetsProps {
  widgetsData: widgetProps[];
}

/*  PRODUCTS */
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
