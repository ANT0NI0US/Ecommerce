import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { IoMdAdd, IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

import { cartSliceState, productCardProps } from "@/shared/types";
import { cartActions } from "@/store/slice/cartSlice";
import { AppDispatch } from "@/store";

const ProductCard = ({ item }: { item: productCardProps }) => {
  const { perfectItems } = useSelector((state: cartSliceState) => state.cart);
  const checkProductExistInPerfectProducts = (id: string) => {
    return perfectItems?.find((item) => item.id === id);
  };
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      }),
    );
    toast.success("Product added to the cart successfully");
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
    toast.success("Product added to the favourites successfully");
  };

  const { id, imgUrl, productName, category, price } = item;
  return (
    <div className="flexBetween relative cursor-pointer flex-col rounded-md shadow shadow-primary-color/30 hover:shadow-primary-color/40">
      <motion.div
        title={
          checkProductExistInPerfectProducts(id)
            ? "Remove from Favourites"
            : "Add To Favourites"
        }
        onClick={addToFavourite}
        whileTap={{ scale: 1.2 }}
        className="flexCenter absolute left-0 top-0 z-10 cursor-pointer  rounded-full p-2"
      >
        {checkProductExistInPerfectProducts(id) ? (
          <IoMdHeart className=" h-7 w-7 text-red-600" />
        ) : (
          <IoMdHeartEmpty className=" h-7 w-7 text-primary-color" />
        )}
      </motion.div>
      <div className="h-[252px] max-h-[252px]">
        <motion.img
          whileHover={{ scale: 0.9 }}
          className="max-h-full max-w-full rounded-tl-md rounded-tr-md"
          src={imgUrl}
          alt={productName}
        />
      </div>

      <div className="w-full">
        <div className="h-[130px] p-3 text-center gridScreen:text-left">
          <h3 className="mt-[15px] text-[1.3rem] font-[600] text-primary-color gridScreen:text-[1.2rem]">
            <Link to={`/shop/${id}`}>{productName}</Link>
          </h3>
          <p className="text-[0.9rem]">{category}</p>
        </div>
        <div className="flexBetween border-t-2 p-3">
          <span className="text-[1.1rem] font-[500] text-primary-color">
            ${price}
          </span>
          <div className="cursor-pointer text-white">
            <motion.div
              onClick={addToCart}
              whileTap={{ scale: 1.2 }}
              className=" flexCenter cursor-pointer rounded-full bg-primary-color p-2"
            >
              <IoMdAdd className="text-[1.2rem]" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
