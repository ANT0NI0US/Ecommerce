import { useDispatch } from "react-redux";
import Modal from "@/ui/Modal";
import ConfirmMessage from "@/ui/ConfirmMessage";
import { toast } from "react-toastify";
import { AppDispatch } from "@/store";
import { auth } from "@/firebase.config";
import { signOut } from "firebase/auth";
import { logoutUser } from "@/store/slice/loginSlice";
import { cartActions } from "@/store/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

export default function ConfirmLogout() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const action = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());
        dispatch(cartActions.returnToInitialState());
        navigate("/login", { replace: true });
        toast.success("Logout successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <Modal>
      <Modal.Open opens="logout">
        <div className="flexCenter absolute bottom-[-40px] left-[50%] z-50 translate-x-[-50%] rounded-md border border-light-color bg-secondary-color-light p-[3px] text-center text-sm shadow-lg dark:border-main-color dark:bg-secondary-color">
          <p className="cursor-pointer rounded-md px-2 py-1 font-semibold text-primary-color-light transition-all hover:bg-primary-color-light/50 hover:text-light-color dark:text-primary-color dark:hover:bg-primary-color dark:hover:text-orange-color">
            Logout
          </p>
          <IoLogOutOutline />
        </div>
      </Modal.Open>
      <Modal.Window name="logout">
        {({ onCloseModal }) => (
          <ConfirmMessage
            message={`Are you sure you wanna to Logout?`}
            onConfirm={() => action()}
            disabled={false}
            onCloseModal={onCloseModal}
          />
        )}
      </Modal.Window>
    </Modal>
  );
}
