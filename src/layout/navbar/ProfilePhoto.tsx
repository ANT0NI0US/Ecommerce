import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";
import useAuth from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase.config";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface CurrentUser {
  photoURL: string;
}

export default function ProfilePhoto() {
  const [toggleImageMenu, setToggleImageMenu] = useState<boolean>(false);
  const closeImageMenu = () => setToggleImageMenu(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useAuth();
  const { photoURL } = currentUser as CurrentUser;
  const ref = useOutsideClick<HTMLDivElement>(() => closeImageMenu());

  const signout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully");
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
        setToggleImageMenu(false);
        dispatch(cartActions.returnToInitialState());
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div
      ref={ref}
      className="flexCenter relative"
      onClick={() => setToggleImageMenu((prev) => !prev)}
    >
      <motion.img
        whileTap={{ scale: 1.2 }}
        className="h-[40px] w-[40px] cursor-pointer rounded-full"
        src={`${
          currentUser ? photoURL : "https://i.ibb.co/rtVJ2Fs/user-icon.webp"
        }`}
        alt="user-icon"
      />

      {toggleImageMenu && (
        <div className="flexCenter absolute bottom-[-40px] left-[50%] z-50 translate-x-[-50%] rounded-md border border-light-color bg-secondary-color-light p-[3px] text-center text-sm shadow-lg dark:border-main-color dark:bg-secondary-color">
          <p
            className="cursor-pointer rounded-md px-2 py-1 font-semibold text-primary-color-light transition-all hover:bg-primary-color-light/50 hover:text-light-color dark:text-primary-color dark:hover:bg-primary-color dark:hover:text-orange-color"
            onClick={signout}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}
