import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productCardProps } from "@/shared/types";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { toast } from "react-toastify";
import { IoMdAdd, IoMdHeartEmpty, IoMdHeart } from "react-icons/io"; // Import the icons
import { AppDispatch } from "@/store";

const ProductCard = ({ item }: { item: productCardProps }) => {
  const perfectItems = useSelector((state) => state.cart.perfectItems);
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
      })
    );
    toast.success("Product added successfully");
  };

  const addToFavourite = () => {
    dispatch(
      cartActions.addPerfectItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
  };

  const { id, imgUrl, productName, category, price } = item;
  return (
    <div className="relative rounded-md shadow shadow-primary-color/30 hover:shadow-primary-color/40 cursor-pointer flexBetween flex-col">
      <motion.div
        title={
          checkProductExistInPerfectProducts(id)
            ? "Remove from Favourites"
            : "Add To Favourites"
        }
        onClick={addToFavourite}
        whileTap={{ scale: 1.2 }}
        className="absolute left-0 top-0 flexCenter cursor-pointer z-10  p-2 rounded-full"
      >
        {checkProductExistInPerfectProducts(id) ? (
          <IoMdHeart className=" text-red-600 w-7 h-7" />
        ) : (
          <IoMdHeartEmpty className=" text-primary-color w-7 h-7" />
        )}
      </motion.div>
      <div className="h-[252px] max-h-[252px]">
        <motion.img
          whileHover={{ scale: 0.9 }}
          className="rounded-tr-md rounded-tl-md max-w-full max-h-full"
          src={imgUrl}
          alt={productName}
        />
      </div>

      <div className="w-full">
        <div className="p-3 text-center gridScreen:text-left h-[130px]">
          <h3 className="text-[1.3rem] gridScreen:text-[1.2rem] text-primary-color font-[600] mt-[15px]">
            <Link to={`/shop/${id}`}>{productName}</Link>
          </h3>
          <p className="text-[0.9rem]">{category}</p>
        </div>
        <div className="flexBetween p-3 border-t-2">
          <span className="text-primary-color font-[500] text-[1.1rem]">
            ${price}
          </span>
          <div className="cursor-pointer text-white">
            <motion.div
              onClick={addToCart}
              whileTap={{ scale: 1.2 }}
              className=" bg-primary-color p-2 rounded-full flexCenter cursor-pointer"
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
