import { IoCloseSharp } from "react-icons/io5";
import { links } from "./links";
import { arrLinks } from "@/shared/types";
import { NavLink } from "react-router-dom";
import Button from "@/ui/Button";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface smallLinksProps {
  showSidebar: boolean;
  closeSidebar: () => void;
}

export default function SmallScreenLinks({
  showSidebar,
  closeSidebar,
}: smallLinksProps) {
  const ref = useOutsideClick(() => closeSidebar());

  return (
    showSidebar && (
      <div className="md:hidden">
        {/* OVERLAY */}
        <div className="fixed inset-0 z-[100] h-full w-full bg-black/20"></div>

        {/* SIDEBAR */}
        <nav
          ref={ref}
          className="fixed bottom-0 right-0 z-[101] h-full w-[180px] bg-secondary-color py-16 shadow-md drop-shadow-xl xs:w-[300px]"
        >
          {/* CLOSE SIDEBAR BUTTON*/}
          <div className="absolute right-2 top-3 w-[35px]">
            <Button
              variation="delete"
              ArialLabel="Close-icon"
              onClick={closeSidebar}
              Font="!rounded-full !h-[35px]"
            >
              <div className="flexCenter">
                <IoCloseSharp className="text-white" size={20} />
              </div>
            </Button>
          </div>

          {/* LINKS */}
          <div className="flex w-full flex-col">
            {links.map((item: arrLinks, index: number) => (
              <div
                key={item.text}
                className={`flexCenter h-[70px] w-full ${
                  index === 0 ? "border-t-2" : ""
                } border-main-color hover:bg-main-color/15 border-b-2 text-lg font-semibold transition-all hover:font-extrabold`}
              >
                <NavLink
                  className={(navClass) =>
                    navClass.isActive
                      ? "flexCenter bg-main-color h-full w-full border-r-8 border-secondary-color px-7 py-3 text-xl font-extrabold text-light-gray"
                      : "flexCenter h-full w-full px-7 py-3"
                  }
                  to={item.path}
                >
                  {item.text}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </div>
    )
  );
}
