import ProductsList from "@/ui/products/ProductsList";
import Header from "@/shared/Header";
import { productCardProps } from "@/shared/types";

interface sameCategoryProps {
  sameCategories: productCardProps[];
}

const ProductsInTheSameCategory = ({ sameCategories }: sameCategoryProps) => {
  return (
    <section className="w-full py-[60px]">
      <div className="mx-auto w-5/6">
        <Header textHead="You might also like" />

        <ProductsList items={sameCategories} />
      </div>
    </section>
  );
};

export default ProductsInTheSameCategory;
