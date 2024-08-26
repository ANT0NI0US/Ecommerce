import { useState } from "react";
import { Review } from "@/shared/types";
import ReviewsTab from "./ReviewsTab";

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
    <section className="w-full pb-[80px]">
      <div className="mx-auto w-[90%] sm:w-5/6">
        <div className="flex text-center text-sm font-medium sm:text-base">
          {tabOptions.map(({ label }) => (
            <div
              key={label}
              className={`basis-1/2 cursor-pointer border-b-2 py-3 transition-all duration-200 ${
                tab === label
                  ? "border-primary-color bg-secondary-color/50 font-extrabold text-primary-color"
                  : "border-orange-color text-orange-color"
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
      </div>
    </section>
  );
}
