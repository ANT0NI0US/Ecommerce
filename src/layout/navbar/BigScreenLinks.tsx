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
          } border-r-2 border-dark-gray text-lg font-semibold text-primary-color transition-all hover:bg-white/45 hover:font-extrabold`}
        >
          <NavLink
            className={(navClass) =>
              navClass.isActive
                ? "flexCenter block h-full w-full border-t-8 border-dark-gray bg-light-gray px-7 py-3 text-xl font-extrabold text-white"
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
