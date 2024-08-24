import { GiHamburgerMenu } from "react-icons/gi";

interface toggleMenuProps {
  toggleSidebar: () => void;
}

export default function ToggleSidebar({ toggleSidebar }: toggleMenuProps) {
  return (
    <div className="flexCenter md:hidden">
      <button aria-label="Toogle-menu" onClick={toggleSidebar}>
        <div className="rounded-full bg-secondary-color p-2">
          <GiHamburgerMenu />
        </div>
      </button>
    </div>
  );
}
