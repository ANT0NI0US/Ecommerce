import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SelectedProductItem from "./SelectedProductItem";
import { CartItem } from "@/utils/types";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";

interface selectedProductsProps {
  allCartItems: CartItem[];
}

export default function SelectedProducts({
  allCartItems,
}: selectedProductsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteItem = (id: string, productName: string) => {
    dispatch(cartActions.deleteItem(id));
    toast.success(`${productName} Has Been Deleted successfully`);
  };

  const handleDecrease = (id: string) => {
    dispatch(cartActions.MinimizeQuantityItem(id));
  };

  const handleIncrease = (id: string) => {
    dispatch(cartActions.MaximizeQuantityItem(id));
  };

  return (
    <div className="col-span-12 rounded-md border-[0.5px] border-card-bg-01-light dark:border-secondary-color md:col-span-8">
      {allCartItems?.map((item, index) => (
        <SelectedProductItem
          key={item.id}
          item={item}
          onDecrease={() => handleDecrease(item.id)}
          onIncrease={() => handleIncrease(item.id)}
          onDelete={() => handleDeleteItem(item.id, item.productName)}
          isLastItem={index === allCartItems.length - 1}
        />
      ))}
    </div>
  );
}
