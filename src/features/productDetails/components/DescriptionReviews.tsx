import { useState } from "react";
import ReviewsTab from "./ReviewsTab";
import { Review } from "@/utils/types";

interface CertainProductDetailProps {
  description: string;
  reviews: Review[] | undefined;
}

export default function DescriptionReviews({
  reviews,
  description,
}: CertainProductDetailProps) {
  const [tab, setTab] = useState<"Description" | "Reviews">("Description");

  const tabOptions = [{ label: "Description" }, { label: "Reviews" }];

  return (
    <section>
      <div className="flex text-center text-sm font-medium sm:text-base">
        {tabOptions.map(({ label }) => (
          <div
            key={label}
            className={`basis-1/2 cursor-pointer border-b-2 py-3 transition-all duration-200 ${
              tab === label
                ? "border-primary-color-light bg-secondary-color-light font-extrabold text-primary-color-light dark:border-primary-color dark:bg-secondary-color/50 dark:text-primary-color"
                : "border-orange-color-light text-orange-color-light dark:border-orange-color dark:text-orange-color"
            }`}
            onClick={() => setTab(label as "Description" | "Reviews")}
          >
            {label}
          </div>
        ))}
      </div>

      {tab === "Description" ? (
        <div className="mt-5 text-left leading-8 ">{description}</div>
      ) : (
        <ReviewsTab reviews={reviews} />
      )}
    </section>
  );
}
