import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CertainProductDetail from "../components/CertainProductDetail";
import DescriptionReviews from "../components/DescriptionReviews";
import ProductsInTheSameCategory from "../components/ProductsInTheSameCategory";
import CommonSection from "@/ui/CommonSection";
import Spinner from "@/ui/spinner/Spinner";
import { productCardProps, productState } from "@/utils/types";
import { getProductById, getProducts } from "@/store/service/productService";
import { AppDispatch } from "@/store";
import useHelmet from "@/hooks/useHelmet";

export default function ProductDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();

  const { isLoading, allProducts, product } = useSelector(
    (state: productState) => state.product,
  ) as {
    isLoading: boolean;
    allProducts: productCardProps[];
    product: productCardProps | null;
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  const { productName, reviews, description, category } =
    product as productCardProps;
  useHelmet(productName);

  useEffect(() => {
    const element = document.getElementById("my-product");
    if (element) {
      const topOffset = element.offsetTop - 69;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, [product]);

  const sameCategories = allProducts.filter(
    (product: productCardProps) =>
      product.category === category && product.id !== id,
  );

  if (!product) {
    return (
      <div className="flexCenter mt-[80px] py-[80px] text-center text-3xl text-primary-color">
        Product not found!
      </div>
    );
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <CommonSection title={productName} />
      <CertainProductDetail product={product} />
      <DescriptionReviews description={description} reviews={reviews} />
      <ProductsInTheSameCategory sameCategories={sameCategories} />
    </>
  );
}
