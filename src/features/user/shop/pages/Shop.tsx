import { useCallback, useEffect, useState } from "react";
import CommonSection from "@/ui/CommonSection";
import { newProductProps, productState } from "@/shared/types";
import { getProducts } from "@/store/service/productService";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import FilterProducts from "../components/FilterProducts";
import Allproducts from "../components/Allproducts";
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
    <>
      <CommonSection title="Products" />
      <FilterProducts
        productsData={productsData}
        allProducts={allProducts}
        handleChangingProduct={handleChangingProduct}
      />
      <Allproducts productsData={productsData} isLoading={isLoading} />
    </>
  );
}