import { useState } from "react";

import { Review } from "@/shared/types";
import ReviewsTab from "./ReviewsTab";

interface CertainProductDetailProps {
  description: string;
  reviews: Review[];
}

const DescriptionReviews = ({
  reviews,
  description,
}: CertainProductDetailProps) => {
  const [tab, setTab] = useState<"desc" | "rev">("desc");

  return (
    <section className="w-full pb-[60px]">
      <div className={`w-5/6 mx-auto`}>
        <div className="flex items-center gap-[15px] text-primary-color font-[500] text-sm sm:text-base">
          <h6
            className={`${tab === "desc" ? "font-[700]" : ""} cursor-pointer`}
            onClick={() => setTab("desc")}
          >
            Description
          </h6>
          <p
            className={`${tab === "rev" ? "font-[700]" : ""} cursor-pointer`}
            onClick={() => setTab("rev")}
          >
            reviews ({reviews?.length})
          </p>
        </div>
        {tab === "desc" && (
          <div className="text-center sm:text-left mt-5 leading-8">
            {description}
          </div>
        )}
        {tab === "rev" && <ReviewsTab reviews={reviews} />}
      </div>
    </section>
  );
};

export default DescriptionReviews;
