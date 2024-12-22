import ProductsList from "@/ui/products/ProductsList";
import HeadText from "@/ui/HeadText";
import { productCardProps } from "@/utils/types";

interface sameCategoryProps {
  sameCategories: productCardProps[];
}

export default function ProductsInTheSameCategory({
  sameCategories,
}: sameCategoryProps) {
  return (
    <section className="py-[40px] md:py-[80px]">
      <HeadText text="You might also like" />

      <ProductsList items={sameCategories} />
    </section>
  );
}
