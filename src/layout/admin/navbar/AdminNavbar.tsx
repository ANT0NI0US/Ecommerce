import { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { signOut } from "firebase/auth";
import { auth } from "@/firebase.config";

import { toast } from "react-toastify";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import useMediaQuery from "@/hooks/UseMediaQuery";
import { cartActions } from "@/store/slice/cartSlice";
import useAuth from "@/hooks/useAuth";
import { AppDispatch } from "@/store";

interface navbarProps {
  isTopOfPage: boolean;
}

interface arrLinks {
  path: string;
  display: string;
}

const allLink: Array<arrLinks> = [
  {
    path: "dashboard",
    display: "Dashboard",
  },
  {
    path: "allProducts",
    display: "All Products",
  },
  {
    path: "allusers",
    display: "Users",
  },
];

const AdminNavbar = ({ isTopOfPage }: navbarProps) => {
  const currentUser = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleImageMenu, setToggleImageMenu] = useState(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? "bg-hero-bg drop-shadow"
    : "bg-white drop-shadow";

  useEffect(() => {
    if (!isAboveMediumScreens) {
      setToggleMenu(false);
    }
  }, [isAboveMediumScreens]);

  const signout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully");
        navigate("/login");
        setToggleImageMenu(false);
        dispatch(cartActions.returnToInitialState());
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Fragment>
      <div
        className={`${navbarBackground} fixed top-0 w-full py-3 shadow-[0_0_1.5px]  shadow-gray-800 z-30`}
      >
        <div className="flexBetween mx-auto w-5/6 gap-10">
          <div className="flexCenter gap-[5px]">
            <img
              className="w-[30px] sm:w-[45px] max-w-[30px] sm:max-w-[45px] max-h-full"
              src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
              alt="storeify-logo"
            />
            <h1 className="font-extrabold text-primary-color text-sm sm:text-lg">
              Storeify
            </h1>
          </div>

          {isAboveMediumScreens && (
            <div>
              <ul className="flexCenter gap-10">
                {allLink.map((item: arrLinks, index: number) => (
                  <li
                    key={index}
                    className={`text-primary-color transition duration-500 hover:text-gray-400 list-none font-semibold`}
                  >
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "font-extrabold" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-2 sm:gap-5">
            <div className="flexCenter gap-2 sm:gap-5 flex-row">
              <div className="w-10 sm:w-14 flexCenter relative z-[99999]">
                <motion.img
                  onClick={() => setToggleImageMenu(!toggleImageMenu)}
                  whileTap={{ scale: 1.2 }}
                  className="max-w-full max-h-full cursor-pointer"
                  src={`${
                    currentUser
                      ? currentUser.photoURL
                      : "https://i.ibb.co/rtVJ2Fs/user-icon.webp"
                  }`}
                  alt="user-icon"
                />

                {toggleImageMenu && (
                  <div className="absolute top-[60px] w-[150px] left-0 bg-card-bg-01 cursor-pointer flexCenter leading-[30px] text-primary-color rounded-[10px] z-[999999]">
                    {currentUser && (
                      <span
                        className="w-full p-[10px] block text-center font-medium"
                        onClick={signout}
                      >
                        Logout
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {!isAboveMediumScreens && (
              <button
                aria-label="Toogle-menu"
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                <GiHamburgerMenu className="text-primary-color h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && toggleMenu && (
        <Fragment>
          <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-black/60"></div>
          <div className="fixed right-0 bottom-0 h-full shadow-md drop-shadow-xl z-[99999] w-[180px] sm:w-[300px] bg-hero-bg p-10">
            <button
              aria-label="Close-icon"
              onClick={() => setToggleMenu(false)}
              className="absolute top-3 right-3 bg-red-700 rounded-full p-1"
            >
              <IoCloseSharp className="h-5 w-5 text-white" />
            </button>

            <ul className="flex flex-col gap-5">
              {allLink.map((item: arrLinks, index: number) => (
                <li
                  key={index}
                  className={`text-primary-color transition duration-500 hover:text-gray-400 list-none font-semibold`}
                >
                  <NavLink
                    className={(navClass) =>
                      navClass.isActive ? "font-extrabold" : ""
                    }
                    to={item.path}
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminNavbar;
