import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { newProductProps } from "@/utils/types";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";

export default function ProductContent({
  item,
  BorderColor,
}: {
  item: newProductProps;
  BorderColor: string;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    if (item.id) {
      dispatch(
        cartActions.addItem({
          id: item.id,
          productName: item.productName,
          price: item.price,
          imgUrl: item.imgUrl,
        }),
      );
      toast.success("Product added to the cart successfully");
    }
  };

  const { id, productName, category, price } = item;

  return (
    <div className="w-full text-primary-color-light dark:text-primary-color">
      <div className="h-[130px] p-3 text-center gridScreen:text-left">
        <h3 className="mt-[15px] text-[1.3rem] font-[600] text-orange-color-light dark:text-orange-color gridScreen:text-[1.2rem]">
          <Link to={`/shop/${id}`}>{productName}</Link>
        </h3>
        <p className="capitalize">{category}</p>
      </div>
      <div
        className="flexBetween border-t-[0.5px] p-3 transition-all duration-200 group-hover:!border-primary-color-light dark:group-hover:!border-primary-color"
        style={{
          borderColor: BorderColor,
        }}
      >
        <span className="text-lg font-medium">${price}</span>
        <motion.div
          onClick={addToCart}
          whileTap={{ scale: 1.2 }}
          className="flexCenter cursor-pointer rounded-full bg-primary-color-light p-2 dark:bg-primary-color"
          title="add to cart"
        >
          <IoMdAdd className="text-secondary-color-light dark:text-secondary-color" />
        </motion.div>
      </div>
    </div>
  );
}
