import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartSliceState } from "@/shared/types";
import Button from "@/ui/Button";

export default function Subtotal() {
  const navigate = useNavigate();
  const { totalAmount } = useSelector((state: cartSliceState) => state.cart);
  return (
    <div className="flexCenter col-span-12 h-fit flex-col rounded-md border-[0.5px] border-card-bg-01-light p-5 dark:border-secondary-color sm:items-start sm:justify-start md:col-span-4">
      <div className="flexCenter w-full gap-5 md:block">
        <h6 className="font-medium">Subtotal</h6>
        <span className="text-xl font-semibold">${totalAmount}</span>
      </div>
      <p className="mt-5 w-full text-center text-sm capitalize md:text-left">
        taxes and shipping will calculate in checkout
      </p>
      <div className="mt-5 flex w-full flex-col items-center justify-center gap-5 md:items-start">
        <motion.div whileTap={{ scale: 1.1 }} className="w-[200px]">
          <Button ArialLabel="Go-To-Shop" onClick={() => navigate("/shop")}>
            <p>Continue Shopping</p>
          </Button>
        </motion.div>
        <motion.div whileTap={{ scale: 1.1 }} className="w-[100px]">
          <Button
            ArialLabel="Go-To-Checkout"
            onClick={() => navigate("/checkout")}
          >
            <p>Checkout</p>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
