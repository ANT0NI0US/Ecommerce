import { useSelector } from "react-redux";

import CommonSection from "@/ui/CommonSection";
import { cartSliceState } from "@/utils/types";
import OrderForm from "../components/OrderForm";
import TotalCost from "../components/TotalCost";
import useHelmet from "@/hooks/useHelmet";

export default function CheckOut() {
  useHelmet("Checkout");
  const { totalQuantity, totalAmount, cartItems } = useSelector(
    (state: cartSliceState) => state.cart,
  );

  return (
    <>
      <CommonSection title="Checkout" />
      <section className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
        <div className="mx-auto grid w-[90%] grid-cols-12 gap-4 md:w-5/6">
          {/* ORDER FORM */}
          <OrderForm
            cartItems={cartItems}
            totalQuantity={totalQuantity}
            totalAmount={totalAmount}
          />
          {/* TOTAL COST */}
          <TotalCost totalQuantity={totalQuantity} totalAmount={totalAmount} />
        </div>
      </section>
    </>
  );
}
