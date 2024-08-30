import ProductsList from "@/ui/products/ProductsList";
import { newProductProps } from "@/shared/types";
import Spinner from "@/ui/spinner/Spinner";

interface allProductsProps {
  isLoading: boolean;
  productsData: newProductProps[];
}

const Allproducts = ({ productsData, isLoading }: allProductsProps) => {
  if (isLoading) return <Spinner height="h-[200px]" />;

  if (productsData.length === 0)
    return (
      <div className="pb-[80px] text-center text-3xl">No Products Found!</div>
    );

  return (
    <section className="mx-auto w-[90%] pb-[80px] sm:w-5/6">
      <ProductsList items={productsData} BorderColor="#163b48" />
    </section>
  );
};

export default Allproducts;
