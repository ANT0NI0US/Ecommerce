import { loginState } from "@/utils/types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminLinks, userLinks } from "../navbar/links";

export default function UsefulLinks() {
  const { isAdmin } = useSelector((state: loginState) => state.login);

  const links = isAdmin ? adminLinks : userLinks;
  return (
    <div className="flex flex-col items-center gap-[15px] sm:items-start">
      <h4 className="mb-3 text-xl font-extrabold text-orange-color-light dark:text-orange-color">
        Useful Links
      </h4>
      <div className="flex flex-col gap-2">
        {links?.map((category) => (
          <Link
            key={category.text}
            className="p-0 transition-all duration-300 hover:pl-1 hover:font-bold"
            to={category.path}
          >
            {category.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
