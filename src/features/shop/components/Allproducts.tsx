import ProductList from "@/components/UI/product/ProductList";
import { newProductProps } from "@/shared/types";
import { FadeLoader } from "react-spinners";

interface allProductsProps {
  isLoading: boolean;
  productsData: newProductProps[];
}

const Allproducts = ({ productsData, isLoading }: allProductsProps) => {
  return (
    <section className="pb-[60px] w-5/6 mx-auto">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[20px] w-full">
        {isLoading ? (
          <div className="flexCenter">
            <FadeLoader color="#36d7b7" />
          </div>
        ) : productsData.length === 0 ? (
          <div className="text-primary-color">No Products Are Found!</div>
        ) : (
          <ProductList items={productsData} />
        )}
      </div>
    </section>
  );
};

export default Allproducts;
