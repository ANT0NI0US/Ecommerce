import ProductList from "@/components/UI/product/ProductList";
import Header from "@/shared/Header";
import { productCardProps } from "@/shared/types";

interface sameCategoryProps {
  sameCategories: productCardProps[];
}

const ProductsInTheSameCategory = ({ sameCategories }: sameCategoryProps) => {
  return (
    <section className="w-full py-[60px]">
      <div className="w-5/6 mx-auto">
        <Header textHead="You might also like" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[20px]">
          <ProductList items={sameCategories} />
        </div>
      </div>
    </section>
  );
};

export default ProductsInTheSameCategory;
