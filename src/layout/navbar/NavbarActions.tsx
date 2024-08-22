import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import ProfilePhoto from "./ProfilePhoto";
import { cartSliceState } from "@/shared/types";

interface allActionsProps {
  icon: ReactElement;
  text: string;
  href: string;
  value: number;
}

export default function NavbarActions() {
  const navigate = useNavigate();

  const { totalQuantity, totalFavouriteItemsQuantity } = useSelector(
    (state: cartSliceState) => state.cart,
  );

  const allActions: Array<allActionsProps> = [
    {
      icon: <FaHeart className="cursor-pointer" size={20} />,
      text: "Favourites",
      href: "/favourites",
      value: totalFavouriteItemsQuantity,
    },
    {
      icon: <FaShoppingBag className="cursor-pointer" size={20} />,
      text: "Cart",
      href: "/cart",
      value: totalQuantity,
    },
  ];

  return (
    <div className="flexCenter gap-2 sm:gap-5">
      {allActions.map((action: allActionsProps) => (
        <div
          key={action.text}
          title={action.text}
          className="relative"
          onClick={() => navigate(`${action.href}`)}
        >
          {action.icon}
          <span className="flexCenter absolute right-[-7px] top-[-15px] z-10 h-[20px] w-[20px] rounded-full bg-primary-color p-1 text-xs font-medium text-white">
            {action.value}
          </span>
        </div>
      ))}
      <ProfilePhoto />
    </div>
  );
}
