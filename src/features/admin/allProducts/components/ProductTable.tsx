import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";

import ProductTableContent from "./ProductTableContent";
import { productState } from "@/shared/types";
import { AppDispatch } from "@/store";
import { getProducts } from "@/store/service/productService";

const columnsHead = ["Image", "Title", "Category", "Price", "Actions"];
const columnHeadStyle =
  "px-4 py-7 text-center text-lg font-black text-primary-color capitalize tracking-wider";

const ProductTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, allProducts } = useSelector(
    (state: productState) => state.product,
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return allProducts.length === 0 ? (
    <h2 className="mt-2">No Products to be displayed</h2>
  ) : (
    <div className="mx-auto w-5/6 overflow-x-auto">
      <table className="w-full max-w-full space-y-6">
        <thead>
          <tr className="border-b">
            {columnsHead.map((column, index) => (
              <th key={index} className={columnHeadStyle}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5}>
                <div className="flexCenter mt-10 w-full">
                  <FadeLoader color="#36d7b7" />
                </div>
              </td>
            </tr>
          ) : (
            <ProductTableContent allProducts={allProducts} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
