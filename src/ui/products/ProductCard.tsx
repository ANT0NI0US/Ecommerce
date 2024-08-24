import { newProductProps } from "@/shared/types";

import AddFavouriteProduct from "./AddFavouriteProduct";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";

export default function ProductCard({ item }: { item: newProductProps }) {
  const { imgUrl, productName } = item;
  return (
    <div className="flexBetween group relative flex-col rounded-md border-[0.5px] border-secondary-color shadow-md shadow-secondary-color drop-shadow-2xl transition-all duration-200 hover:border-primary-color hover:shadow-primary-color">
      {/* ADD TO FAVOURITES */}
      <AddFavouriteProduct item={item} />
      {/* PRODUCT IMAGE */}
      <ProductImage imgUrl={imgUrl} productName={productName} />
      {/* PRODUCT CONTENT */}
      <ProductContent item={item} />
    </div>
  );
}
