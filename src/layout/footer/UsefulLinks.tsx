import { Link } from "react-router-dom";

interface allUsefulLinksProps {
  title: string;
  path: string;
}

const allUsefulLinks: Array<allUsefulLinksProps> = [
  { title: "Home", path: "/home" },
  { title: "Shop", path: "/shop" },
  { title: "Cart", path: "/cart" },
  { title: "Login", path: "/login" },
];

export default function UsefulLinks() {
  return (
    <div className="flex flex-col items-center gap-[15px] sm:items-start">
      <h4 className="text-orange-color mb-3 text-xl font-extrabold">
        Useful Links
      </h4>
      <div className="flex flex-col gap-2">
        {allUsefulLinks.map((category: allUsefulLinksProps) => (
          <Link
            key={category.title}
            className="p-0 transition-all duration-300 hover:pl-1 hover:font-bold"
            to={category.path}
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
