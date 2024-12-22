import { Link } from "react-router-dom";
import { userLinks } from "../navbar/links";
import ListHeader from "./ListHeader";
import { arrLinks } from "@/utils/types";

export default function UsefulLinks() {
  return (
    <div className="flex flex-col items-center gap-1 sm:items-start sm:gap-3">
      <ListHeader title="Useful Links" />

      <div className="flex flex-col gap-2">
        {userLinks?.map(({ text, path }: arrLinks) => (
          <Link
            key={text}
            className="p-0 transition-all duration-300 hover:pl-1 hover:font-bold"
            to={path}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
}
