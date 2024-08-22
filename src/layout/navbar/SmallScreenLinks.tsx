import { IoCloseSharp } from "react-icons/io5";
import { links } from "./links";
import { arrLinks } from "@/shared/types";
import { NavLink } from "react-router-dom";
// import { useOutsideClick } from "@/hooks/useOutsideClick";

interface smallLinksProps {
  showSidebar: boolean;
  closeSidebar: () => void;
}

export default function SmallScreenLinks({
  showSidebar,
  closeSidebar,
}: smallLinksProps) {
  // const ref = useOutsideClick(() => closeSidebar());

  return (
    showSidebar && (
      <div
        // ref={ref}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-[100] h-full w-full bg-black/20"></div>
        <div className="fixed bottom-0 right-0 z-[101] h-full w-[180px] bg-hero-bg p-10 shadow-md drop-shadow-xl sm:w-[300px]">
          <button
            aria-label="Close-icon"
            onClick={closeSidebar}
            className="absolute right-3 top-3 rounded-full bg-red-700 p-1"
          >
            <IoCloseSharp className="h-5 w-5 text-white" />
          </button>

          <ul className="flex flex-col gap-5">
            {links.map((item: arrLinks) => (
              <li
                key={item.text}
                className={`list-none font-semibold text-primary-color transition duration-500 hover:text-gray-400`}
              >
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? "font-extrabold" : ""
                  }
                  to={item.path}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
