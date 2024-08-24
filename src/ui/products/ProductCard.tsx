import { newProductProps } from "@/shared/types";

import AddFavouriteProduct from "./AddFavouriteProduct";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";

export default function ProductCard({
  item,
  BorderColor = "#0e1013",
}: {
  item: newProductProps;
  BorderColor?: string;
}) {
  const { imgUrl, productName } = item;
  return (
    <div
      className="flexBetween group relative flex-col rounded-md border-[0.5px] shadow-md drop-shadow-2xl transition-all duration-500 hover:!border-primary-color hover:!shadow-2xl hover:!shadow-primary-color"
      style={{
        borderColor: BorderColor,
        boxShadow: `0 0 10px ${BorderColor}`,
      }}
    >
      {/* ADD TO FAVOURITES */}
      <AddFavouriteProduct item={item} />
      {/* PRODUCT IMAGE */}
      <ProductImage imgUrl={imgUrl} productName={productName} />
      {/* PRODUCT CONTENT */}
      <ProductContent item={item} BorderColor={BorderColor} />
    </div>
  );
}
