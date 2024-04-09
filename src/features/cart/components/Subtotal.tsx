import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartSliceState } from "@/shared/types";

const Subtotal = () => {
  const { totalAmount } = useSelector((state: cartSliceState) => state.cart);
  return (
    <div className="flexCenter col-span-12 h-fit flex-col rounded-md border p-3 sm:items-start sm:justify-start md:col-span-4">
      <div className="flexCenter w-full gap-5 md:block">
        <h6 className="font-medium">Subtotal</h6>
        <span className="text-xl font-semibold text-primary-color">
          ${totalAmount}
        </span>
      </div>
      <p className="mt-2 w-full text-center text-sm md:text-left">
        taxes and shipping will calculate in checkout
      </p>
      <div className="flexCenter w-full flex-col gap-5 md:items-start md:gap-0">
        <motion.button aria-label="Go-To-Shop" whileTap={{ scale: 1.1 }}>
          <Link className="btn btn-banner mt-7 block w-fit md:mt-11" to="/shop">
            Continue Shopping
          </Link>
        </motion.button>
        <motion.button aria-label="Go-To-Shop" whileTap={{ scale: 1.1 }}>
          <Link
            className="btn btn-banner mt-3 block w-fit md:mt-9"
            to="/checkout"
          >
            Checkout
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Subtotal;
