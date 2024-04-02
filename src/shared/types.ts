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

interface Review {
  rating: number;
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

interface Item {
  id: string;
  productName: string;
  imgUrl: string;
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
  cart: {
    cartItems: CartItem[];
    totalAmount: number;
    totalQuantity: number;
  };
}

export interface clockProps {
  label: string;
}

// admin

// all users
export interface userProps {
  id: string;
  displayName: string;
  email: string;
  photoURL: string;
  type: "admin" | "user";
}
export interface userState {
  user: {
    isLoading: boolean;
    errors: string | null;
    allUsers: userProps[];
  };
}

// all products
export interface productState {
  product: {
    isLoading: boolean;
    errors: null | string;
    allProducts: productCardProps[];
  };
}
