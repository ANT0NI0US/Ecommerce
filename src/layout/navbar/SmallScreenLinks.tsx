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
        <div className="fixed inset-0 z-[100] h-full w-full bg-black/40 dark:bg-white/10"></div>

        {/* SIDEBAR */}
        <nav
          ref={ref}
          className="fixed bottom-0 right-0 z-[101] h-full w-[180px] bg-light-color py-16 text-primary-color-light shadow-md drop-shadow-xl dark:bg-main-color dark:text-primary-color xs:w-[300px]"
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
                <IoCloseSharp className="text-light-color" size={20} />
              </div>
            </Button>
          </div>

          {/* LINKS */}
          <div className="flex w-full flex-col">
            {links.map((item: arrLinks, index: number) => (
              <div
                onClick={() => closeSidebar()}
                key={item.text}
                className={`${
                  index === 0 ? "border-t-2" : ""
                } flexCenter h-full w-full border-b-2 border-secondary-color-light text-lg font-semibold transition-all hover:border-secondary-color-light hover:bg-secondary-color-light/40 hover:font-extrabold dark:border-secondary-color dark:hover:bg-secondary-color/40`}
              >
                <NavLink
                  className={(navClass) =>
                    navClass.isActive
                      ? "flexCenter h-full w-full border-r-8 border-orange-color-light bg-secondary-color-light/50 px-7 py-3 text-xl font-extrabold text-orange-color-light dark:border-orange-color dark:bg-secondary-color/50 dark:text-orange-color"
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
