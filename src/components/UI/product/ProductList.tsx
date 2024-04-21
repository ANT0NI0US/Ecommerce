import ProductCard from "./ProductCard";
import { newProductProps } from "@/shared/types";
import { motion } from "framer-motion";

const ProductList = ({ items }: { items: newProductProps[] }) => {
  return items?.map((item: newProductProps) => (
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
  ));
};

export default ProductList;
