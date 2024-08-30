import { motion } from "framer-motion";

interface productNameProps {
  imgUrl: File | null | string;
  productName: string;
}

export default function ProductImage({
  imgUrl,
  productName,
}: productNameProps) {
  return (
    <div className="h-[252px] max-h-[252px] p-2">
      <motion.img
        whileHover={{ scale: 0.9 }}
        className="max-h-full max-w-full"
        src={typeof imgUrl === "string" ? imgUrl : undefined}
        alt={productName}
      />
    </div>
  );
}
