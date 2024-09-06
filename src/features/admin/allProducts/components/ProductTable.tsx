import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductTableContent from "./ProductTableContent";
import { productState } from "@/shared/types";
import { AppDispatch } from "@/store";
import { getProducts } from "@/store/service/productService";
import Table from "@/ui/Table";
import Spinner from "@/ui/spinner/Spinner";

const tableHeadCells = ["Image", "Title", "Category", "Price", "Actions"];

export default function ProductTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, allProducts } = useSelector(
    (state: productState) => state.product,
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  if (allProducts?.length === 0) {
    return (
      <h2 className="flexCenter mx-auto w-[90%] py-[80px] text-center text-xl font-semibold md:w-5/6">
        No products found.
      </h2>
    );
  }

  return (
    <Table>
      <Table.Header>
        {tableHeadCells.map((headCell, index) => (
          <Table.Cell key={index} isHeader>
            {headCell}
          </Table.Cell>
        ))}
      </Table.Header>
      <Table.Body
        data={allProducts}
        render={(product) => (
          <ProductTableContent product={product} key={product?.id} />
        )}
      />
    </Table>
  );
}
