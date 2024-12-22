import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="flexCenter relative min-h-screen w-full bg-cover bg-center py-[45px]"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Fonline-shopping.webp?alt=media&token=3613355b-23d6-4a58-8e3a-d94e84c4bb92')`,
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/45 backdrop-blur-[7px] dark:bg-black/80"></div>

      <div className="z-[110] w-[95%] rounded-md p-[15px] shadow-2xl shadow-black drop-shadow-md sm:w-[540px] sm:p-[20px]">
        <Outlet />
      </div>
    </div>
  );
}
