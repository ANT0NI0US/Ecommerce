import useMediaQuery from "@/hooks/UseMediaQuery";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { productCardProps } from "@/shared/types";

interface CertainProductDetailProps {
  product: productCardProps;
}

const CertainProductDetail = ({ product }: CertainProductDetailProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, imgUrl, productName, price, avgRating, category, shortDesc } =
    product;

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        price,
        imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  const addToFavourite = () => {
    dispatch(
      cartActions.addPerfectItem({
        id,
        productName,
        price,
        imgUrl,
      })
    );
  };

  return (
    <section id="my-product" className="w-full mt-[69px] pb-[60px]">
      <div
        className={`${
          isAboveMediumScreens ? "flex-row" : "flex-col"
        } w-5/6 mx-auto flexBetween gap-12`}
      >
        <div className="basis-3/5 flexCenter">
          <img src={imgUrl} alt={productName} />
        </div>
        <div className={`text-center md:text-left md:basis-3/5`}>
          <h2 className="text-primary-color text-2xl md:text-[1.6rem] font-[600] leading-[48px]">
            {productName}
          </h2>
          <div className="flexCenter flex-col sm:flex-row md:justify-start gap-1 sm:gap-9">
            <div className="flexCenter gap-1">
              <FaStar className="text-lime-600" />
              <FaStar className="text-lime-600" />
              <FaStar className="text-lime-600" />
              <FaStar className="text-lime-600" />
              <FaStarHalfAlt className="text-lime-600" />
            </div>
            <p className="text-primary-color leading-[28px]">
              (<span className="text-lime-600 font-[600]">{avgRating} </span>
              Ratings)
            </p>
          </div>

          <div className="flexCenter flex-col sm:flex-row md:justify-start gap-1 sm:gap-4">
            <span className="block text-[1.3rem] font-[500] text-primary-color">
              ${price}
            </span>
            <p className="text-primary-color font-medium">
              Category:
              <span className="font-semibold">{category?.toUpperCase()}</span>
            </p>
          </div>
          <p className="mt-1">{shortDesc}</p>
          <div className="flexCenter gap-4 flex-col sm:flex-row">
            <motion.button
              onClick={addToCart}
              aria-label="Add to cart"
              className="btn btn-banner mt-4"
              whileTap={{ scale: 1.1 }}
            >
              Add to Cart
            </motion.button>

            <motion.button
              onClick={addToFavourite}
              aria-label="Add to cart"
              className="btn btn-banner mt-4"
              whileTap={{ scale: 1.1 }}
            >
              Add to Favourit
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertainProductDetail;
