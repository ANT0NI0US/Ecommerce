import SelectedProductItem from "./SelectedProductItem";
import { CartItem } from "@/utils/types";

interface selectedProductsProps {
  allCartItems: CartItem[];
}

export default function SelectedProducts({
  allCartItems,
}: selectedProductsProps) {
  return (
    <div className="col-span-12 divide-y-2 divide-card-bg-01-light rounded-md border-[0.5px] border-card-bg-01-light dark:divide-secondary-color dark:border-secondary-color md:col-span-8">
      {allCartItems?.map((item) => (
        <SelectedProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}
