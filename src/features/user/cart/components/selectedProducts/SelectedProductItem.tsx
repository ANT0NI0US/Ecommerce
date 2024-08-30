import { CartItem } from "@/shared/types";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import QuantityControl from "./QuantityControl";
import DeleteButton from "./DeleteButton";

interface SelectedProductItemProps {
  item: CartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onDelete: () => void;
  isLastItem: boolean;
}

export default function SelectedProductItem({
  item,
  onDecrease,
  onIncrease,
  onDelete,
  isLastItem,
}: SelectedProductItemProps) {
  return (
    <div
      className={`flexBetween relative h-[500px] flex-col gap-2 p-5 md:h-[250px] md:flex-row ${
        isLastItem ? "" : "border-b-[0.5px] border-b-secondary-color"
      }`}
    >
      <DeleteButton onDelete={onDelete} />
      <ProductImage imgUrl={item.imgUrl} productName={item.productName} />
      <ProductDetails productName={item.productName} price={item.price} />
      <QuantityControl
        quantity={item.quantity}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />
    </div>
  );
}
