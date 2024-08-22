import { GiHamburgerMenu } from "react-icons/gi";

interface toggleMenuProps {
  toggleSidebar: () => void;
}

export default function ToggleSidebar({ toggleSidebar }: toggleMenuProps) {
  return (
    <div className="block md:hidden">
      <button aria-label="Toogle-menu" onClick={toggleSidebar}>
        <GiHamburgerMenu className="h-6 w-6 text-primary-color" />
      </button>
    </div>
  );
}
