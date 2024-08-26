import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { Item } from "@/shared/types";
import { cartActions } from "@/store/slice/cartSlice";
import { AppDispatch } from "@/store";

interface FavProductTableContentProps {
  perfectItems: Item[];
}

const tableDateStyle =
  "text-primary-color whitespace-nowrap px-6 py-4 text-center text-base";

const FavProductTableContent = ({
  perfectItems,
}: FavProductTableContentProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = (product: Item) => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      }),
    );
    toast.success("Product added successfully");
  };
  return perfectItems.map((product, index) => (
    <tr
      className={`${perfectItems.length - 1 === index ? "" : "border-b"}`}
      key={index}
    >
      <td
        className={`flexCenter min-h-[125px]  min-w-[125px] ${tableDateStyle}`}
      >
        <img
          src={
            typeof product?.imgUrl === "string" ? product?.imgUrl : undefined
          }
          alt={product.productName}
          className="h-[80px] w-[80px] bg-cover"
        />
      </td>
      <td className={`${tableDateStyle}`}>{product.productName}</td>
      <td className={`${tableDateStyle}`}>${product.price}</td>
      <td className={`${tableDateStyle}`}>
        <motion.div
          onClick={() => addToCart(product)}
          whileTap={{ scale: 1.2 }}
          className=" flexCenter cursor-pointer rounded-full bg-primary-color px-4 py-2 text-light-color"
        >
          <IoMdAdd className="text-[1.2rem]" />
          Add To Cart
        </motion.div>
      </td>
    </tr>
  ));
};

export default FavProductTableContent;
