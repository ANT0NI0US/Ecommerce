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
      })
    );
    toast.success("Product added successfully");
  };
  return perfectItems.map((product, index) => (
    <tr
      className={`${perfectItems.length - 1 === index ? "" : "border-b"}`}
      key={index}
    >
      <td
        className={`min-w-[125px] min-h-[125px]  flexCenter ${tableDateStyle}`}
      >
        <img
          src={product.imgUrl}
          alt={product.productName}
          className="w-[80px] h-[80px] bg-cover"
        />
      </td>
      <td className={`${tableDateStyle}`}>{product.productName}</td>
      <td className={`${tableDateStyle}`}>${product.price}</td>
      <td className={`${tableDateStyle}`}>
        <motion.div
          onClick={() => addToCart(product)}
          whileTap={{ scale: 1.2 }}
          className=" bg-primary-color py-2 px-4 rounded-full flexCenter cursor-pointer text-white"
        >
          <IoMdAdd className="text-[1.2rem]" />
          Add To Cart
        </motion.div>
      </td>
    </tr>
  ));
};

export default FavProductTableContent;
