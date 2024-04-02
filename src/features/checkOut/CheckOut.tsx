import CommonSection from "@/components/UI/commonSection/CommonSection";
import Helmet from "@/components/UI/helmet/Helmet";
import { cartSliceState } from "@/shared/types";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const totalQuantity = useSelector(
    (state: cartSliceState) => state.cart.totalQuantity
  );
  const totalAmount = useSelector(
    (state: cartSliceState) => state.cart.totalAmount
  );
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="w-full py-[60px]">
        <div className="w-5/6 mx-auto grid grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-12 md:col-span-8 overflow-x-auto">
            <h3 className="text-primary-color text-[1.2rem] font-bold text-center sm:text-left mb-5">
              Billing Information
            </h3>
            <form action="" className="flex flex-col gap-5">
              <input
                className="input_checkout"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className="input_checkout"
                type="number"
                placeholder="Enter Your Phone Number"
              />
              <input
                className="input_checkout"
                type="text"
                placeholder="Enter your Street Address"
              />
              <input
                className="input_checkout"
                type="text"
                placeholder="Enter your City"
              />
              <input
                className="input_checkout"
                type="text"
                placeholder="Enter your Potal Code"
              />
              <input
                className="input_checkout"
                type="text"
                placeholder="Enter your Country"
              />
            </form>
          </div>
          <div className="col-span-12 md:col-span-4 bg-primary-color text-white p-5 h-fit  rounded-md">
            <div className="flex items-start justify-start flex-col text-center w-full gap-5">
              <h6 className="flexBetween w-full">
                Total Qty:{" "}
                <span>
                  {totalQuantity === 1
                    ? `${totalQuantity} Item`
                    : `${totalQuantity} Items`}
                </span>
              </h6>
              <h6 className="flexBetween w-full">
                Subtotal: <span>${totalAmount}</span>
              </h6>
              <div className="w-full flex flex-col items-start">
                <h6 className="flexBetween w-full">
                  Shipping: <span>$0</span>
                </h6>
                <span className="text-xs ml-2 text-small-text-color">
                  Free Shipping
                </span>
              </div>

              <h4 className="flexBetween w-full border-t-[1px] border-small-text-color py-5 text-xl font-medium">
                Total Cost: <span>${totalAmount}</span>
              </h4>
            </div>
            <div className="w-full">
              <motion.button
                aria-label="place-an-order"
                className="btn btn-timer mt-7 md:mt-11"
                whileTap={{ scale: 1.1 }}
                type="submit"
              >
                Place an Order
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CheckOut;
