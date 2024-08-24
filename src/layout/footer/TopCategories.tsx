import { Link } from "react-router-dom";

interface categoriesProps {
  title: string;
  path: string;
}

const categories: Array<categoriesProps> = [
  { title: "Mobile Phones", path: "#" },
  { title: "Modern Sofa", path: "#" },
  { title: "Arm Chair", path: "#" },
  { title: "Smart Watches", path: "#" },
];

export default function TopCategories() {
  return (
    <div className="flex flex-col items-center gap-[15px] sm:items-start ">
      <h4 className="text-light-color mb-3 text-xl font-extrabold">
        Top Categories
      </h4>
      <div className="flex flex-col gap-2">
        {categories.map((category: categoriesProps) => (
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
