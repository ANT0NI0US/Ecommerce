import { useState } from "react";
import BigScreenLinks from "./BigScreenLinks";
import NavbarActions from "./NavbarActions";
import ToggleSidebar from "./ToggleSidebar";
import SmallScreenLinks from "./SmallScreenLinks";
import Logo from "@/ui/Logo";
import Container from "@/ui/Container";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <div className="fixed top-0 z-30 h-[80px] w-full bg-light-color text-primary-color-light shadow-md dark:bg-main-color dark:text-primary-color">
        <Container Styles="flexBetween gap-6">
          {/* LOGO */}
          <Logo />

          <div className="flexBetween h-full gap-8">
            {/* LINKS IN BIG SCREENS */}
            <BigScreenLinks />

            <div className="flex gap-2 sm:gap-5">
              {/* ACTIONS */}
              <NavbarActions />

              {/* TOGGLE SIDEBAR */}
              <ToggleSidebar toggleSidebar={toggleSidebar} />
            </div>
          </div>
        </Container>
      </div>
      {/* LINKS IN SMALL SCREENS */}
      <SmallScreenLinks showSidebar={showSidebar} closeSidebar={closeSidebar} />
    </>
  );
}
