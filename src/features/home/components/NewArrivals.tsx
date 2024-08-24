import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/shared/Header";
import ProductsList from "@/ui/products/ProductsList";
import { getProducts } from "@/store/service/productService";
import { productCardProps, productState } from "@/shared/types";
import { AppDispatch } from "@/store";
import Spinner from "@/ui/spinner/Spinner";

export default function NewArrivals() {
  const [mobileWirlessProducts, setMobileWirlessProducts] = useState<
    productCardProps[]
  >([]);

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useSelector((state: productState) => state.product);

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((allProducts) => {
        const fileredWirlessMobiles = allProducts.filter(
          (item: productCardProps) =>
            item.category === "mobile" || item.category === "wireless",
        );
        setMobileWirlessProducts(fileredWirlessMobiles);
      })
      .catch((error) => {
        throw new error();
      });
  }, [dispatch]);

  if (isLoading) return <Spinner height="h-[200px]" />;

  return (
    <section className="w-full bg-secondary-color pt-[80px]">
      <div className="mx-auto w-[90%] sm:w-5/6">
        <Header textHead="New Arrivals" />

        <ProductsList items={mobileWirlessProducts} />
      </div>
    </section>
  );
}
