import ProductsList from "@/ui/products/ProductsList";
import { newProductProps } from "@/shared/types";
import { FadeLoader } from "react-spinners";

interface allProductsProps {
  isLoading: boolean;
  productsData: newProductProps[];
}

const Allproducts = ({ productsData, isLoading }: allProductsProps) => {
  return (
    <section className="mx-auto w-5/6 pb-[60px]">
      {isLoading ? (
        <div className="flexCenter">
          <FadeLoader color="#36d7b7" />
        </div>
      ) : productsData.length === 0 ? (
        <div className="text-primary-color">No Products Are Found!</div>
      ) : (
        <ProductsList items={productsData} />
      )}
    </section>
  );
};

export default Allproducts;
