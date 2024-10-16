import ProductsList from "@/ui/products/ProductsList";
import Spinner from "@/ui/spinner/Spinner";
import { newProductProps } from "@/utils/types";

interface allProductsProps {
  isLoading: boolean;
  productsData: newProductProps[];
}

export default function AllProducts({
  productsData,
  isLoading,
}: allProductsProps) {
  if (isLoading) return <Spinner height="h-[200px]" />;

  if (productsData.length === 0)
    return (
      <div className="pb-[80px] text-center text-3xl">No Products Found!</div>
    );

  return (
    <section className="mx-auto w-[90%] pb-[80px] sm:w-5/6">
      <ProductsList items={productsData} BorderColor="#f39530" />
    </section>
  );
}
