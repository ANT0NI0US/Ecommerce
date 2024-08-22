import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-primary-color pb-[30px] pt-[60px]">
      <div className="mx-auto grid w-5/6 grid-cols-12 gap-4 sm:gap-8">
        <div className="col-span-12 flex flex-col items-center gap-[15px] text-white sm:col-span-6 sm:items-start  md:col-span-4">
          <div className="flexCenter gap-[5px]">
            <img
              className="max-h-full w-[45px] max-w-[45px]"
              src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
              alt="storeify-logo"
            />
            <h1 className="text-lg font-extrabold">Storeify</h1>
          </div>
          <p className="text-center text-sm leading-[30px] text-[#ffffffba] sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            perspiciatis vel laborum dolorum repellat ex illum earum dignissimos
            architecto. Voluptates.
          </p>
        </div>
        <div className="col-span-12 flex flex-col items-center justify-center gap-[15px] text-white sm:col-span-6 sm:items-start md:col-span-3">
          <h4 className="mb-3 text-xl font-extrabold">Top Categories</h4>
          <Link
            className="text-[#ffffffba] duration-[0.5s] hover:ml-3 hover:text-white sm:hover:ml-1"
            to="#"
          >
            Mobile Phones
          </Link>
          <Link
            className="text-[#ffffffba] duration-[0.5s] hover:ml-3 hover:text-white sm:hover:ml-1"
            to="#"
          >
            Modern Sofa
          </Link>
          <Link
            className="text-[#ffffffba] duration-[0.5s] hover:ml-3 hover:text-white sm:hover:ml-1"
            to="#"
          >
            Arm Chair
          </Link>
          <Link
            className="text-[#ffffffba] duration-[0.5s] hover:ml-3 hover:text-white sm:hover:ml-1"
            to="#"
          >
            Smart Watches
          </Link>
        </div>
        <div className="col-span-12 flex flex-col items-center justify-center gap-[15px] text-white sm:col-span-6 sm:items-start  md:col-span-2">
          <h4 className="mb-3 text-xl font-extrabold">Useful Links</h4>
          <Link
            className="text-[#ffffffba] duration-[0.5s] hover:ml-3 hover:text-white sm:hover:ml-1"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="text-[#ffffffba] duration-[0.5s] hover:ml-3 hover:text-white sm:hover:ml-1"
            to="/cart"
          >
            Cart
          </Link>
          <Link
            className="text-[#ffffffba] duration-[0.5s] hover:ml-3 hover:text-white sm:hover:ml-1"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-[#ffffffba] duration-[0.5s] hover:ml-3 hover:text-white sm:hover:ml-1"
            to="#"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="col-span-12 flex flex-col items-center justify-center gap-[25px] text-white  sm:col-span-6 sm:items-start  md:col-span-3">
          <h4 className="mb-3 text-xl font-extrabold">Contact</h4>
          <div className="flex flex-col items-center gap-[15px] sm:flex-row">
            <FaLocationDot className="text-3xl text-[#ffffffba] sm:text-2xl" />
            <span className="text-[#ffffffba]">Alexandria , Egypt</span>
          </div>
          <div className="flex flex-col items-center gap-[15px] sm:flex-row">
            <FaPhone className="text-3xl text-[#ffffffba] sm:text-2xl" />
            <span className="text-[#ffffffba]">01285551479</span>
          </div>
          <div className="flex flex-col items-center  gap-[15px] sm:flex-row">
            <MdEmail className="text-3xl text-[#ffffffba] sm:text-2xl" />
            <span className="text-[#ffffffba]">antoniousnasr3@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flexCenter mt-[15px] border-t-[1px] pt-[15px] text-center">
        <p className="text-[0.8rem] text-[#ffffffba]">
          Copyright © {Year} Storeify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
