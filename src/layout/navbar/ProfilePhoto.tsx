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
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useAuth();
  const { photoURL } = currentUser as CurrentUser;
  const ref = useOutsideClick(() => setToggleImageMenu(false));

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
    <div ref={ref} className="flexCenter relative">
      <motion.img
        onClick={() => setToggleImageMenu((prev) => !prev)}
        whileTap={{ scale: 1.2 }}
        className="h-[40px] w-[40px] cursor-pointer rounded-full"
        src={`${
          currentUser ? photoURL : "https://i.ibb.co/rtVJ2Fs/user-icon.webp"
        }`}
        alt="user-icon"
      />

      {toggleImageMenu && (
        <div className="flexCenter absolute bottom-[-50px] left-[50%] z-50 translate-x-[-50%] rounded-md border border-light-gray bg-card-bg-01 p-[5px] text-center text-sm shadow-lg">
          <p
            className="hover:bg-blue cursor-pointer rounded-md p-[5px] text-primary-color transition-all hover:bg-primary-color hover:text-card-bg-01"
            onClick={signout}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}
