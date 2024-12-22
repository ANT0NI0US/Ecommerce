import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "@/ui/Button";
import { CartItem } from "@/utils/types";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";

interface QuantityControlProps {
  item: CartItem;
}

export default function QuantityControl({ item }: QuantityControlProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDecrease = () => {
    dispatch(cartActions.MinimizeQuantityItem(item?.id));
  };

  const handleIncrease = () => {
    dispatch(cartActions.MaximizeQuantityItem(item?.id));
  };
  return (
    <div className="flexBetween gap-5 rounded-md bg-secondary-color-light dark:bg-secondary-color">
      <div className="w-[50px]" title="minus">
        <Button
          variation="secondary"
          Font="h-[40px]"
          ArialLabel="minus Product"
          disabled={item?.quantity === 1}
          onClick={handleDecrease}
        >
          <div className="flexCenter p-1">
            <FaMinus />
          </div>
        </Button>
      </div>
      <span className="text-2xl font-extrabold">{item?.quantity}</span>
      <div className="w-[50px]" title="plus">
        <Button
          variation="secondary"
          Font="h-[40px]"
          ArialLabel="Plus Product"
          onClick={handleIncrease}
        >
          <div className="flexCenter p-1">
            <FaPlus />
          </div>
        </Button>
      </div>
    </div>
  );
}
