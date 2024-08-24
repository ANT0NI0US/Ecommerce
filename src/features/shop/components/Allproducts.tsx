import ProductsList from "@/ui/products/ProductsList";
import { newProductProps } from "@/shared/types";
import Spinner from "@/ui/spinner/Spinner";

interface allProductsProps {
  isLoading: boolean;
  productsData: newProductProps[];
}

const Allproducts = ({ productsData, isLoading }: allProductsProps) => {
  if (isLoading) return <Spinner height="h-[200px]" />;

  return (
    <section className="mx-auto w-5/6 pb-[60px]">
      {productsData.length === 0 ? (
        <div className="text-primary-color">No Products Are Found!</div>
      ) : (
        <ProductsList items={productsData} BorderColor="#163b48" />
      )}
    </section>
  );
};

export default Allproducts;
