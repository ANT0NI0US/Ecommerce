import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="flexCenter relative min-h-screen w-full bg-cover bg-center py-[30px]"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Fonline-shopping.webp?alt=media&token=3613355b-23d6-4a58-8e3a-d94e84c4bb92')`,
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/45 dark:bg-black/80"></div>

      <div className="w-[95%] rounded-md bg-light-color/70 p-[30px] shadow-2xl dark:bg-light-color/30 sm:w-[540px]">
        <Outlet />
      </div>
    </div>
  );
}
