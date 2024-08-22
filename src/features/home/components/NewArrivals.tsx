import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/shared/Header";
import ProductList from "@/components/UI/product/ProductList";
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

  return (
    <section className="w-full py-[125px]">
      <div className="mx-auto w-5/6">
        <Header textHead="New Arrivals" />
        {isLoading ? (
          <Spinner height="h-[200px]" />
        ) : (
          <ProductList items={mobileWirlessProducts} />
        )}
      </div>
    </section>
  );
}
