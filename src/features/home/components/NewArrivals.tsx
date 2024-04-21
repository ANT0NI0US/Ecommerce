import { useState, useEffect } from "react";
import Header from "@/shared/Header";
import ProductList from "@/components/UI/product/ProductList";
import { getProducts } from "@/store/service/productService";
import { productCardProps, productState } from "@/shared/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { FadeLoader } from "react-spinners";

const NewArrivals = () => {
  const [mobileWirlessProducts, setMobileWirlessProducts] = useState<
    productCardProps[]
  >([]);

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useSelector((state: productState) => state.product);

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((allProducts) => {
        const fileredChair = allProducts.filter(
          (item: productCardProps) =>
            item.category === "mobile" || item.category === "wireless",
        );
        setMobileWirlessProducts(fileredChair);
      })
      .catch((error) => {
        throw new error();
      });
  }, [dispatch]);
  return (
    <section className="w-full py-[125px]">
      <div className="mx-auto w-5/6">
        <Header textHead="New Arrivals" />
        {isLoading ? (
          <div className="flexCenter">
            <FadeLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[20px]">
            <ProductList items={mobileWirlessProducts} />
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
