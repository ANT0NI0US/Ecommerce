import { useState } from "react";
import Logo from "./Logo";
import BigScreenLinks from "./BigScreenLinks";
import NavbarActions from "./NavbarActions";
import ToggleSidebar from "./ToggleSidebar";
import SmallScreenLinks from "./SmallScreenLinks";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <div className="fixed top-0 z-30 h-[80px] w-full bg-main-color shadow-md drop-shadow-sm">
        <div className="flexBetween mx-auto h-full w-5/6 gap-10">
          {/* LOGO */}
          <Logo />

          {/* LINKS IN BIG SCREENS */}
          <BigScreenLinks />

          <div className="flex gap-2 sm:gap-5">
            {/* ACTIONS */}
            <NavbarActions />

            {/* TOGGLE SIDEBAR */}
            <ToggleSidebar toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
      {/* LINKS IN SMALL SCREENS */}
      <SmallScreenLinks showSidebar={showSidebar} closeSidebar={closeSidebar} />
    </>
  );
}
