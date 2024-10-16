import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "@/ui/Button";

interface QuantityControlProps {
  quantity: number | undefined;
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityControlProps) {
  return (
    <div className="flexBetween gap-5 rounded-md bg-secondary-color-light dark:bg-secondary-color">
      <div className="w-[50px]" title="minus">
        <Button
          variation="secondary"
          Font="h-[40px]"
          ArialLabel="minus Product"
          disabled={quantity === 1}
          onClick={onDecrease}
        >
          <div className="flexCenter p-1">
            <FaMinus />
          </div>
        </Button>
      </div>
      <span className="text-2xl font-extrabold">{quantity}</span>
      <div className="w-[50px]" title="plus">
        <Button
          variation="secondary"
          Font="h-[40px]"
          ArialLabel="Plus Product"
          onClick={onIncrease}
        >
          <div className="flexCenter p-1">
            <FaPlus />
          </div>
        </Button>
      </div>
    </div>
  );
}
