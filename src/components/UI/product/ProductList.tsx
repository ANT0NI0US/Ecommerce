import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { newProductProps } from "@/shared/types";

const ProductList = ({ items }: { items: newProductProps[] }) => {
  return (
    <div className="flex flex-col gap-4 xs:grid xs:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
      {items?.map((item: newProductProps) => (
        <motion.div
          key={item.id}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ProductCard key={item.id} item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
