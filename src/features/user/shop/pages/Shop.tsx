import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "../components/FilterProducts";
import Products from "../components/Products";
import CommonSection from "@/ui/CommonSection";
import { newProductProps, productState } from "@/utils/types";
import { getProducts } from "@/store/service/productService";
import { AppDispatch } from "@/store";
import useHelmet from "@/hooks/useHelmet";

export default function Shop() {
  useHelmet("Products");

  const dispatch = useDispatch<AppDispatch>();
  const [productsData, setProductData] = useState<newProductProps[]>([]);

  const handleChangingProduct = useCallback(
    (newProductData: newProductProps[]) => {
      setProductData(newProductData);
    },
    [],
  );

  const { isLoading, allProducts } = useSelector(
    (state: productState) => state.product,
  );

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((allProducts) => {
        setProductData(allProducts);
      })
      .catch((error) => {
        throw new error();
      });
  }, [dispatch]);

  return (
    <div className="bg-light-color text-primary-color-light dark:bg-main-color dark:text-primary-color">
      <CommonSection title="Products" />
      <FilterProducts
        productsData={productsData}
        allProducts={allProducts}
        handleChangingProduct={handleChangingProduct}
      />
      <Products productsData={productsData} isLoading={isLoading} />
    </div>
  );
}
