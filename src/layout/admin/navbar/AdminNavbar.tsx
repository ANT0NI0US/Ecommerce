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
  {
    path: "orders",
    display: "Orders",
  },
];

interface CurrentUser {
  photoURL: string;
}

const AdminNavbar = ({ isTopOfPage }: navbarProps) => {
  const currentUser = useAuth();
  const { photoURL } = currentUser as CurrentUser;

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
        localStorage.removeItem("token");
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
        className={`${navbarBackground} fixed top-0 z-30 w-full py-3  shadow-[0_0_1.5px] shadow-gray-800`}
      >
        <div className="flexBetween mx-auto w-5/6 gap-10">
          <div className="flexCenter gap-[5px]">
            <img
              className="max-h-full w-[30px] max-w-[30px] sm:w-[45px] sm:max-w-[45px]"
              src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
              alt="storeify-logo"
            />
            <h1 className="text-sm font-extrabold text-primary-color sm:text-lg">
              Storeify
            </h1>
          </div>

          {isAboveMediumScreens && (
            <div>
              <ul className="flexCenter gap-10">
                {allLink.map((item: arrLinks, index: number) => (
                  <li
                    key={index}
                    className={`list-none font-semibold text-primary-color transition duration-500 hover:text-gray-400`}
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
            <div className="flexCenter flex-row gap-2 sm:gap-5">
              <div className="flexCenter relative z-[99999] w-10 sm:w-14">
                <motion.img
                  onClick={() => setToggleImageMenu(!toggleImageMenu)}
                  whileTap={{ scale: 1.2 }}
                  className="max-h-full max-w-full cursor-pointer"
                  src={`${
                    currentUser
                      ? photoURL
                      : "https://i.ibb.co/rtVJ2Fs/user-icon.webp"
                  }`}
                  alt="user-icon"
                />

                {toggleImageMenu && (
                  <div className="flexCenter absolute left-0 top-[60px] z-[999999] w-[150px] cursor-pointer rounded-[10px] bg-card-bg-01 leading-[30px] text-primary-color">
                    {currentUser && (
                      <span
                        className="block w-full p-[10px] text-center font-medium"
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
                <GiHamburgerMenu className="h-6 w-6 text-primary-color" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && toggleMenu && (
        <Fragment>
          <div className="fixed left-0 top-0 z-[9999] h-full w-full bg-black/60"></div>
          <div className="fixed bottom-0 right-0 z-[99999] h-full w-[180px] bg-hero-bg p-10 shadow-md drop-shadow-xl sm:w-[300px]">
            <button
              aria-label="Close-icon"
              onClick={() => setToggleMenu(false)}
              className="absolute right-3 top-3 rounded-full bg-red-700 p-1"
            >
              <IoCloseSharp className="h-5 w-5 text-white" />
            </button>

            <ul className="flex flex-col gap-5">
              {allLink.map((item: arrLinks, index: number) => (
                <li
                  key={index}
                  className={`list-none font-semibold text-primary-color transition duration-500 hover:text-gray-400`}
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
