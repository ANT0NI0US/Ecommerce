import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import Modal from "@/ui/Modal";
import ConfirmMessage from "@/ui/ConfirmMessage";
import Button from "@/ui/Button";
import { userProps, userState } from "@/utils/types";
import { AppDispatch } from "@/store";
import { deleteUser } from "@/store/service/userService";

interface Props {
  user: userProps;
}

export default function DeleteUser({ user }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: userState) => state.user);

  const action = () => {
    if (user?.id && typeof user.photoURL === "string") {
      dispatch(deleteUser({ id: user.id, photoURL: user.photoURL }))
        .unwrap()
        .then(() => {
          toast.success("User has been deleted successfully");
        })
        .catch(() => {
          toast.success("Something went wrong");
        });
    }
  };

  return (
    <Modal>
      <Modal.Open opens="deleteCertainUser">
        <motion.div whileTap={{ scale: 1.2 }} className="mx-auto w-[120px]">
          <Button ArialLabel="delete product" variation="delete">
            <div className="flexCenter gap-1">
              <AiFillDelete />
              <span>Delete</span>
            </div>
          </Button>
        </motion.div>
      </Modal.Open>
      <Modal.Window name="deleteCertainUser">
        {({ onCloseModal }) => (
          <ConfirmMessage
            message={`Are you sure you wanna to delete "${user?.displayName}" ?`}
            onConfirm={action}
            disabled={isLoading}
            onCloseModal={onCloseModal}
          />
        )}
      </Modal.Window>
    </Modal>
  );
}
