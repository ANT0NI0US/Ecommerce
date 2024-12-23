import { NavLink } from "react-router-dom";
import { userLinks } from "./links";
import { arrLinks } from "@/utils/types";

export default function BigScreenLinks() {
  return (
    <div className="hidden h-full md:flex md:items-center md:justify-center">
      {userLinks?.map((item: arrLinks, index: number) => (
        <div
          key={item.text}
          className={`${
            index === 0 ? "border-l-2" : ""
          } flexCenter h-full w-[130px] border-r-2 border-secondary-color-light text-center text-lg font-semibold transition-all hover:border-secondary-color-light hover:bg-secondary-color-light/40 hover:font-extrabold dark:border-secondary-color dark:hover:bg-secondary-color/40`}
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
