import { NavLink } from "react-router-dom";
import { links } from "./links";
import { arrLinks } from "@/shared/types";

export default function BigScreenLinks() {
  return (
    <div className="hidden h-full w-full flex-1 md:flex md:items-center md:justify-center">
      {links?.map((item: arrLinks, index: number) => (
        <div
          key={item.text}
          className={`flexCenter h-full w-full ${
            index === 0 ? "border-l-2" : ""
          } hover:bg-main-color/15 border-main-color border-r-2 text-lg font-semibold transition-all hover:font-extrabold`}
        >
          <NavLink
            className={(navClass) =>
              navClass.isActive
                ? "flexCenter bg-main-color text-light-color h-full w-full border-t-8 border-secondary-color px-7 py-3 text-xl font-extrabold"
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
