import { NavLink } from "react-router-dom";
import { adminLinks, userLinks } from "./links";
import { arrLinks, loginState } from "@/utils/types";
import { useSelector } from "react-redux";

export default function BigScreenLinks() {
  const { isAdmin } = useSelector((state: loginState) => state.login);

  const links = isAdmin ? adminLinks : userLinks;
  return (
    <div className="hidden h-full w-full flex-1 md:flex md:items-center md:justify-center">
      {links?.map((item: arrLinks, index: number) => (
        <div
          key={item.text}
          className={`${
            index === 0 ? "border-l-2" : ""
          } flexCenter h-full w-full border-r-2 border-secondary-color-light text-center text-lg font-semibold transition-all hover:border-secondary-color-light hover:bg-secondary-color-light/40 hover:font-extrabold dark:border-secondary-color dark:hover:bg-secondary-color/40`}
        >
          <NavLink
            className={(navClass) =>
              navClass.isActive
                ? "flexCenter h-full w-full border-b-8 border-orange-color-light bg-secondary-color-light/50 px-7 py-3 text-xl font-extrabold text-orange-color-light dark:border-orange-color dark:bg-secondary-color/50 dark:text-orange-color"
                : "flexCenter h-full w-full px-7 py-3"
            }
            to={item?.path}
          >
            {item?.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
