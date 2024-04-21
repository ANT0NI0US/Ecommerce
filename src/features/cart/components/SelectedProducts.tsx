import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CartItem } from "@/shared/types";

interface selectedProductsProps {
  allCartItems: CartItem[];
}

const SelectedProducts = ({ allCartItems }: selectedProductsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteItem = (id: string) => {
    dispatch(cartActions.deleteItem(id));
    toast.success("Product Has Been Deleted successfully");
  };
  return (
    <div className="col-span-12 rounded-md border p-4 md:col-span-8">
      {allCartItems.map((item, index) => (
        <div
          key={item.id}
          className={`flexCenter relative flex-col py-5 sm:flex-row ${
            index === allCartItems.length - 1 ? "" : "border-b"
          }`}
        >
          <div className="flexCenter mr-0 max-w-[200px] sm:mr-5">
            <img
              src={typeof item?.imgUrl === "string" ? item?.imgUrl : undefined}
              alt={item?.productName}
              className="max-w-full bg-cover"
            />
          </div>
          <div className="flex w-full flex-1 flex-col gap-4">
            <div className="flexBetween flex-col-reverse gap-3 text-center sm:flex-row">
              <h6 className="font-medium">{item?.productName}</h6>
              <motion.div
                onClick={() => item.id && handleDeleteItem(item?.id)}
                whileTap={{ scale: 1.1 }}
                className="absolute right-0 top-1 cursor-pointer whitespace-nowrap p-5 text-center text-primary-color sm:relative  sm:top-0"
              >
                <RiDeleteBin5Line className="absolute left-1/2 top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 transform" />
              </motion.div>
            </div>
            <div className="flexBetween flex-col gap-3 sm:flex-row">
              <span className="text-xl font-semibold text-primary-color">
                ${item.price}
              </span>
              <div className="flexBetween gap-5 rounded-xl bg-card-bg-01 px-4 py-2 font-bold text-primary-color">
                <button
                  aria-label="minus Product"
                  disabled={item.quantity === 1}
                  onClick={() =>
                    item.id &&
                    dispatch(cartActions.MinimizeQuantityItem(item?.id))
                  }
                  className="disabled:text-gray-400"
                >
                  <FaMinus className="h-3 w-3" />
                </button>
                <span>{item.quantity}</span>
                <button
                  aria-label="Plus Product"
                  onClick={() =>
                    item.id &&
                    dispatch(cartActions.MaximizeQuantityItem(item?.id))
                  }
                >
                  <FaPlus className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedProducts;
