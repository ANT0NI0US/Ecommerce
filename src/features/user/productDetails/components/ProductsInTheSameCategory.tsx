import ProductsList from "@/ui/products/ProductsList";
import Header from "@/shared/Header";
import { productCardProps } from "@/shared/types";

interface sameCategoryProps {
  sameCategories: productCardProps[];
}

export default function ProductsInTheSameCategory({
  sameCategories,
}: sameCategoryProps) {
  return (
    <section className="w-full bg-light-color py-[60px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
      <div className="mx-auto w-5/6">
        <Header textHead="You might also like" />

        <ProductsList items={sameCategories} />
      </div>
    </section>
  );
}
