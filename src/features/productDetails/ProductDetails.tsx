import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Helmet from "@/components/UI/helmet/Helmet";
import useMediaQuery from "@/hooks/UseMediaQuery";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import { toast } from "react-toastify";
import { cartActions } from "@/store/slice/cartSlice";
import { productCardProps } from "@/shared/types";
import Header from "@/shared/Header";
import ProductList from "@/components/UI/product/ProductList";
import { AppDispatch } from "@/store";
import { getProducts } from "@/store/service/productService";

const ProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const [tab, setTab] = useState<"desc" | "rev">("desc");
  const [rate, setRate] = useState<number | null>(null);
  const [reviewName, setReviewName] = useState<string>("");
  const [reviewComment, setReviewComment] = useState<string>("");

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const { isLoading, allProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const product: productCardProps | undefined = allProducts.find(
    (product) => product.id === id
  );

  if (!product) {
    return (
      <div className="mt-[69px] py-[60px] flexCenter text-primary-color text-3xl text-center">
        Product not found!
      </div>
    );
  }

  const {
    productName,
    imgUrl,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  useEffect(() => {
    const element = document.getElementById("my-product");
    if (element) {
      const topOffset = element.offsetTop - 69;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, [product]);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName,
        price,
        imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  const sameCategories = allProducts.filter(
    (item) => item.category === category && item.id !== id
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReview = {
      name: reviewName,
      text: reviewComment,
      rating: rate,
    };
    toast.success("Review Submitted");
    setReviewName("");
    setReviewComment("");
    setRate(null);
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
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
                Category:{" "}
                <span className="font-semibold">{category.toUpperCase()}</span>
              </p>
            </div>
            <p className="mt-1">{shortDesc}</p>

            <motion.button
              onClick={addToCart}
              aria-label="Add to cart"
              className="btn btn-banner mt-7 md:mt-10"
              whileTap={{ scale: 1.1 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </section>
      <section className="w-full pb-[60px]">
        <div className={`w-5/6 mx-auto`}>
          <div className="flex items-center gap-[15px] text-primary-color font-[500] text-sm sm:text-base">
            <h6
              className={`${tab === "desc" ? "font-[700]" : ""} cursor-pointer`}
              onClick={() => setTab("desc")}
            >
              Description
            </h6>
            <p
              className={`${tab === "rev" ? "font-[700]" : ""} cursor-pointer`}
              onClick={() => setTab("rev")}
            >
              reviews ({reviews?.length})
            </p>
          </div>
          {tab === "desc" && (
            <div className="text-center sm:text-left mt-5 leading-8">
              {description}
            </div>
          )}
          {tab === "rev" && (
            <Fragment>
              <ul className="mt-5">
                {reviews.map((item, index) => (
                  <li
                    key={index}
                    className="mb-3 border-b-[1px] border-small-text-color pb-3"
                  >
                    <h6 className="font-extrabold text-lg text-primary-color capitalize">
                      Antonious nasr
                    </h6>
                    <span className="block mb-2 font-semibold text-lime-600 ">
                      {item.rating} (rating)
                    </span>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
              <div className="w-full sm:w-[70%] m-auto mt-[40px]">
                <h4 className="text-[1.2rem] font-semibold text-center sm:text-left">
                  Leave Your Experience
                </h4>
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 py-4"
                >
                  <input
                    className="input_style"
                    type="text"
                    value={reviewName}
                    onChange={(e) => {
                      setReviewName(e.target.value);
                    }}
                    required
                    placeholder="Enter Name"
                  />
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="flex items-center gap-1"
                      whileTap={{ scale: 1.1 }}
                      onClick={() => setRate(1)}
                    >
                      1
                      <FaStar className="text-lime-600 font-semibold cursor-pointer" />
                    </motion.span>
                    <motion.span
                      className="flex items-center gap-1"
                      whileTap={{ scale: 1.1 }}
                      onClick={() => setRate(2)}
                    >
                      2
                      <FaStar className="text-lime-600 font-semibold cursor-pointer" />
                    </motion.span>
                    <motion.span
                      className="flex items-center gap-1"
                      whileTap={{ scale: 1.1 }}
                      onClick={() => setRate(3)}
                    >
                      3
                      <FaStar className="text-lime-600 font-semibold cursor-pointer" />
                    </motion.span>
                    <motion.span
                      className="flex items-center gap-1"
                      whileTap={{ scale: 1.1 }}
                      onClick={() => setRate(4)}
                    >
                      4
                      <FaStar className="text-lime-600 font-semibold cursor-pointer" />
                    </motion.span>
                    <motion.span
                      className="flex items-center gap-1"
                      whileTap={{ scale: 1.1 }}
                      onClick={() => setRate(5)}
                    >
                      5
                      <FaStar className="text-lime-600 font-semibold cursor-pointer" />
                    </motion.span>
                  </div>
                  <textarea
                    value={reviewComment}
                    onChange={(e) => {
                      setReviewComment(e.target.value);
                    }}
                    required
                    className="input_style"
                    placeholder="Review Message..."
                    rows={3}
                  />
                  <motion.button
                    aria-label="Go-To-Shop"
                    className="btn btn-banner mt-7 md:mt-11"
                    whileTap={{ scale: 1.1 }}
                    type="submit"
                  >
                    Submit
                  </motion.button>
                </form>
              </div>
            </Fragment>
          )}
        </div>
      </section>
      <section className="w-full py-[60px]">
        <div className="w-5/6 mx-auto">
          <Header textHead="You might also like" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[20px]">
            <ProductList items={sameCategories} />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
