import { useSelector } from "react-redux";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import Helmet from "@/components/UI/helmet/Helmet";
import { cartSliceState } from "@/shared/types";
import Subtotal from "../components/Subtotal";
import SelectedProducts from "../components/SelectedProducts";

const Cart = () => {
  const allCartItems = useSelector(
    (state: cartSliceState) => state.cart.cartItems,
  );

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section className="w-full py-[60px]">
        {allCartItems.length === 0 ? (
          <h2 className="mt-2">No items Added To The Cart</h2>
        ) : (
          <div className="mx-auto grid w-5/6 grid-cols-12 gap-4 sm:gap-8">
            <SelectedProducts allCartItems={allCartItems} />
            <Subtotal />
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default Cart;
