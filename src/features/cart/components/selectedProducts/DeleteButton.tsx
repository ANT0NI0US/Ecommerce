import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { RiDeleteBin5Line } from "react-icons/ri";
import ConfirmMessage from "./ConfirmMessage";
import Modal from "@/ui/Modal";
import Button from "@/ui/Button";
import { CartItem } from "@/utils/types";
import { cartActions } from "@/store/slice/cartSlice";
import { AppDispatch } from "@/store";

interface DeleteButtonProps {
  item: CartItem;
}

export default function DeleteButton({ item }: DeleteButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteItem = () => {
    dispatch(cartActions.deleteItem(item?.id));
    toast.success(`${item?.productName} Has Been Deleted successfully`);
  };
  return (
    <Modal>
      <Modal.Open opens="DeleteItemForm">
        <motion.div
          title="Delete Product"
          whileTap={{ scale: 1.1 }}
          className="absolute right-4 top-4 w-[45px] cursor-pointer"
        >
          <Button
            Font="!rounded-full"
            ArialLabel="Delete Product"
            variation="danger"
          >
            <div className="flexCenter">
              <RiDeleteBin5Line size={25} />
            </div>
          </Button>
        </motion.div>
      </Modal.Open>
      <Modal.Window name="DeleteItemForm">
        <ConfirmMessage
          message={`Are you sure you wanna to delete "${item?.productName}" ?`}
          onConfirm={handleDeleteItem}
        />
      </Modal.Window>
    </Modal>
  );
}
