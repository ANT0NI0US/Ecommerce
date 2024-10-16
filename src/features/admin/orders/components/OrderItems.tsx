import ModalFormGrid from "@/ui/ModalFormGrid";
import { CartItem } from "@/utils/types";

interface Props {
  items: CartItem[];
}

const cardStyle =
  "flex flex-wrap gap-1 rounded-md bg-secondary-color-light p-[8px] text-primary-color-light dark:bg-secondary-color/50 dark:text-primary-color";

export default function OrderItems({ items }: Props) {
  return (
    <div className="mb-[15px] mt-10 border-b-[0.5px] border-orange-color-light pb-5 dark:border-orange-color md:mb-[20px]">
      <h4 className="mb-[10px] text-lg text-primary-color-light dark:text-primary-color">
        Items
      </h4>
      <ModalFormGrid>
        {items?.map((item: CartItem) => (
          <div key={item.id} className={`${cardStyle}`}>
            {item.quantity}
            <span className="font-bold"> ({item.productName}) </span>
            with {item.totalPrice}$
          </div>
        ))}
      </ModalFormGrid>
    </div>
  );
}
