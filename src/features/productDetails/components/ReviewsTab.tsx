import AllExistReviews from "./AllExistReviews";
import TabForm from "./TabForm";
import { Review } from "@/shared/types";

type Props = {
  reviews: Review[] | undefined;
};

export default function ReviewsTab({ reviews }: Props) {
  return (
    <>
      <div className="my-5 text-left text-lg font-bold">
        All Reviews
        <span className="text-sm font-normal text-orange-color">
          {" "}
          ( {reviews?.length} )
        </span>
      </div>
      <AllExistReviews reviews={reviews} />
      <TabForm />
    </>
  );
}
