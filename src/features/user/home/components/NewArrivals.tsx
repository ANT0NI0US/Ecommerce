import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadText from "@/ui/HeadText";
import ProductsList from "@/ui/products/ProductsList";
import Spinner from "@/ui/spinner/Spinner";
import { productCardProps, productState } from "@/utils/types";
import { getProducts } from "@/store/service/productService";
import { AppDispatch } from "@/store";

export default function NewArrivals() {
  const [mobileWirelessProducts, setMobileWirelessProducts] = useState<
    productCardProps[]
  >([]);

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useSelector((state: productState) => state.product);

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((allProducts) => {
        const filteredWirelessMobiles = allProducts.filter(
          (item: productCardProps) =>
            item.category === "mobile" || item.category === "wireless",
        );
        setMobileWirelessProducts(filteredWirelessMobiles);
      })
      .catch((error) => {
        throw new error();
      });
  }, [dispatch]);

  if (isLoading) return <Spinner height="h-[200px]" />;

  return (
    <section className="w-full bg-secondary-color-light pt-[80px] dark:bg-secondary-color">
      <div className="mx-auto w-[90%] sm:w-5/6">
        <HeadText text="New Arrivals" />

        <ProductsList items={mobileWirelessProducts} />
      </div>
    </section>
  );
}
