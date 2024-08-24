import { NavLink } from "react-router-dom";
import { links } from "./links";
import { arrLinks } from "@/shared/types";

export default function BigScreenLinks() {
  return (
    <div className="hidden h-full w-full flex-1 md:flex md:items-center md:justify-center">
      {links?.map((item: arrLinks, index: number) => (
        <div
          key={item.text}
          className={`${
            index === 0 ? "border-l-2" : ""
          } flexCenter h-full w-full border-r-2 border-secondary-color text-lg font-semibold transition-all hover:bg-secondary-color/15 hover:font-extrabold`}
        >
          <NavLink
            className={(navClass) =>
              navClass.isActive
                ? "flexCenter h-full w-full border-b-8 border-light-color bg-secondary-color/15 px-7 py-3 text-xl font-extrabold text-light-color"
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
