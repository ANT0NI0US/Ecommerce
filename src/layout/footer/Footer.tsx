import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full pt-[60px] pb-[30px] bg-primary-color">
      <div className="w-5/6 mx-auto grid grid-cols-12 gap-4 sm:gap-8">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex items-center sm:items-start flex-col gap-[15px]  text-white">
          <div className="flexCenter gap-[5px]">
            <img
              className="w-[45px] max-w-[45px] max-h-full"
              src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
              alt="storeify-logo"
            />
            <h1 className="font-extrabold text-lg">Storeify</h1>
          </div>
          <p className="text-center sm:text-left text-sm leading-[30px] text-[#ffffffba]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            perspiciatis vel laborum dolorum repellat ex illum earum dignissimos
            architecto. Voluptates.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center sm:items-start flex-col gap-[15px] text-white">
          <h4 className="font-extrabold text-xl mb-3">Top Categories</h4>
          <Link
            className="text-[#ffffffba] hover:ml-3 sm:hover:ml-1 hover:text-white duration-[0.5s]"
            to="#"
          >
            Mobile Phones
          </Link>
          <Link
            className="text-[#ffffffba] hover:ml-3 sm:hover:ml-1 hover:text-white duration-[0.5s]"
            to="#"
          >
            Modern Sofa
          </Link>
          <Link
            className="text-[#ffffffba] hover:ml-3 sm:hover:ml-1 hover:text-white duration-[0.5s]"
            to="#"
          >
            Arm Chair
          </Link>
          <Link
            className="text-[#ffffffba] hover:ml-3 sm:hover:ml-1 hover:text-white duration-[0.5s]"
            to="#"
          >
            Smart Watches
          </Link>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-2 flex justify-center items-center sm:items-start flex-col gap-[15px]  text-white">
          <h4 className="font-extrabold text-xl mb-3">Useful Links</h4>
          <Link
            className="text-[#ffffffba] hover:ml-3 sm:hover:ml-1 hover:text-white duration-[0.5s]"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="text-[#ffffffba] hover:ml-3 sm:hover:ml-1 hover:text-white duration-[0.5s]"
            to="/cart"
          >
            Cart
          </Link>
          <Link
            className="text-[#ffffffba] hover:ml-3 sm:hover:ml-1 hover:text-white duration-[0.5s]"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-[#ffffffba] hover:ml-3 sm:hover:ml-1 hover:text-white duration-[0.5s]"
            to="#"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center sm:items-start  flex-col gap-[25px]  text-white">
          <h4 className="font-extrabold text-xl mb-3">Contact</h4>
          <div className="flex items-center flex-col sm:flex-row gap-[15px]">
            <FaLocationDot className="text-3xl sm:text-2xl text-[#ffffffba]" />
            <span className="text-[#ffffffba]">Alexandria , Egypt</span>
          </div>
          <div className="flex items-center flex-col sm:flex-row gap-[15px]">
            <FaPhone className="text-3xl sm:text-2xl text-[#ffffffba]" />
            <span className="text-[#ffffffba]">01285551479</span>
          </div>
          <div className="flex items-center flex-col  sm:flex-row gap-[15px]">
            <MdEmail className="text-3xl sm:text-2xl text-[#ffffffba]" />
            <span className="text-[#ffffffba]">antoniousnasr3@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="text-center flexCenter border-t-[1px] mt-[15px] pt-[15px]">
        <p className="text-[#ffffffba] text-[0.8rem]">
          Copyright © {Year} Storeify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
