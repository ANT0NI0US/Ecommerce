import { useState } from "react";
import Button from "@/ui/Button";
import AllExistReviews from "./AllExistReviews";
import TabForm from "./TabForm";
import { Review } from "@/utils/types";

type Props = {
  reviews: Review[] | undefined;
};

export default function ReviewsTab({ reviews }: Props) {
  const [newReviewFormOpen, setNewReviewFormOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flexBetween my-7 flex-col gap-7 xs:flex-row">
        <div className="flexCenter text-left text-lg font-extrabold">
          All Reviews
          <span className="pl-1 font-normal text-orange-color">
            ( {reviews?.length} )
          </span>
        </div>

        <div className="w-full xs:w-[200px]">
          <Button
            ArialLabel="ReviewForm"
            onClick={() => setNewReviewFormOpen((prev) => !prev)}
          >
            {newReviewFormOpen ? "Close the Review" : "Write a Review"}
          </Button>
        </div>
      </div>
      {newReviewFormOpen ? <TabForm /> : <AllExistReviews reviews={reviews} />}
    </>
  );
}
