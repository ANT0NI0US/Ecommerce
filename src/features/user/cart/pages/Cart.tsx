import { useSelector } from "react-redux";
import CommonSection from "@/ui/CommonSection";
import { cartSliceState } from "@/utils/types";
import Subtotal from "../components/Subtotal";
import SelectedProducts from "../components/selectedProducts/SelectedProducts";
import useHelmet from "@/hooks/useHelmet";

export default function Cart() {
  useHelmet("Shopping Cart");
  const allCartItems = useSelector(
    (state: cartSliceState) => state.cart.cartItems,
  );

  return (
    <>
      <CommonSection title="Shopping Cart" />
      <section className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
        {allCartItems.length === 0 ? (
          <h2 className="flexCenter mx-auto w-[90%] py-[80px] text-center text-xl font-semibold md:w-5/6">
            No items Added To The Cart
          </h2>
        ) : (
          <div className="mx-auto grid w-[90%] grid-cols-12 gap-4 sm:gap-8 md:w-5/6">
            <SelectedProducts allCartItems={allCartItems} />
            <Subtotal />
          </div>
        )}
      </section>
    </>
  );
}
