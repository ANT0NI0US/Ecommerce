import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="flexCenter relative min-h-screen w-full bg-cover bg-center py-[30px]"
      style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/online-shopping-concept-small-cart-stands-keyboard-dark-background-digital-e-commerce-generative-ai-319225212.jpg')`,
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/45"></div>

      <div className="w-[95%] rounded-md bg-light-color/20 p-[30px] shadow-xl sm:w-[540px]">
        <Outlet />
      </div>
    </div>
  );
}
