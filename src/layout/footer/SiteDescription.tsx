import Links from "./Links";
import Logo from "@/ui/Logo";

export default function SiteDescription() {
  return (
    <div className="col-span-2 flex flex-col items-center gap-1 sm:items-start sm:gap-3">
      <Logo />
      <p className="text-center leading-[30px] xs:text-left">
        Explore a wide range of products, add to your cart, and enjoy a seamless
        shopping experience. Fast, secure checkout at your fingertips.
      </p>
      <Links />
    </div>
  );
}
