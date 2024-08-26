import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { newProductProps } from "@/shared/types";
import GridContainer from "../GridContainer";

export default function ProductsList({
  items,
  BorderColor,
}: {
  items: newProductProps[];
  BorderColor?: string;
}) {
  return (
    <GridContainer>
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
          <ProductCard key={item.id} item={item} BorderColor={BorderColor} />
        </motion.div>
      ))}
    </GridContainer>
  );
}
