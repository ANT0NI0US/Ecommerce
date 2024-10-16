import { useDispatch } from "react-redux";
import Modal from "@/ui/Modal";
import ConfirmMessage from "@/ui/ConfirmMessage";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import Button from "@/ui/Button";
import { newProductProps, productState } from "@/utils/types";
import { AppDispatch } from "@/store";
import { deleteProduct } from "@/store/service/productService";

interface Props {
  product: newProductProps;
}

export default function DeleteProduct({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: productState) => state.product);

  const action = () => {
    if (product?.id && typeof product.imgUrl === "string") {
      dispatch(deleteProduct({ id: product.id, imgUrl: product.imgUrl }))
        .then(() => {
          toast.success("Product has been deleted successfully");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  };

  return (
    <Modal>
      <Modal.Open opens="productDeleteForm">
        <motion.div whileTap={{ scale: 1.2 }} className="mx-auto w-[120px]">
          <Button ArialLabel="delete product" variation="delete">
            <div className="flexCenter gap-1">
              <AiFillDelete />
              <span>Delete</span>
            </div>
          </Button>
        </motion.div>
      </Modal.Open>
      <Modal.Window name="productDeleteForm">
        {({ onCloseModal }) => (
          <ConfirmMessage
            message={`Are you sure you wanna to delete "${product?.productName}" ?`}
            onConfirm={action}
            disabled={isLoading}
            onCloseModal={onCloseModal}
          />
        )}
      </Modal.Window>
    </Modal>
  );
}
