import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="flexCenter relative min-h-screen w-full bg-cover bg-center py-[30px]"
      style={{
        backgroundImage: `url('https://nairobibusiness.wordpress.com/wp-content/uploads/2015/11/online-shopping.gif')`,
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/45 dark:bg-black/80"></div>

      <div className="w-[95%] rounded-md bg-light-color/70 p-[30px] shadow-2xl dark:bg-light-color/30 sm:w-[540px]">
        <Outlet />
      </div>
    </div>
  );
}
