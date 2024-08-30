import Button from "@/ui/Button";
import { motion } from "framer-motion";
import { RiDeleteBin5Line } from "react-icons/ri";

interface DeleteButtonProps {
  onDelete: () => void;
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <motion.div
      title="Delete Product"
      onClick={onDelete}
      whileTap={{ scale: 1.1 }}
      className="absolute right-4 top-4 w-[30px] cursor-pointer"
    >
      <Button
        Font="!rounded-full !h-[30px]"
        ArialLabel="Delete Product"
        variation="delete"
      >
        <div className="flexCenter">
          <RiDeleteBin5Line className="text-[16px]" />
        </div>
      </Button>
    </motion.div>
  );
}
