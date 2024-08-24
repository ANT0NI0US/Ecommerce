import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceState, newProductProps } from "@/shared/types";
import { cartActions } from "@/store/slice/cartSlice";
import { AppDispatch } from "@/store";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

export default function AddFavouriteProduct({
  item,
}: {
  item: newProductProps;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const { perfectItems } = useSelector((state: cartSliceState) => state.cart);
  const checkProductExistInPerfectProducts = (id: string) => {
    return perfectItems?.find((item) => item.id === id);
  };

  const addToFavourite = () => {
    dispatch(
      cartActions.addPerfectItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      }),
    );
  };

  const { id } = item;
  return (
    <motion.div
      title={
        id && checkProductExistInPerfectProducts(id)
          ? "Remove from Favourites"
          : "Add To Favourites"
      }
      onClick={addToFavourite}
      whileTap={{ scale: 1.2 }}
      className="flexCenter absolute left-0 top-0 z-10 cursor-pointer rounded-full p-2"
    >
      {id && checkProductExistInPerfectProducts(id) ? (
        <IoMdHeart className=" h-7 w-7 text-red-600" />
      ) : (
        <IoMdHeartEmpty className=" h-7 w-7 text-primary-color" />
      )}
    </motion.div>
  );
}
