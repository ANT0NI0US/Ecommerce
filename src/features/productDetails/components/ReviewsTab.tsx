import { Fragment } from "react";
import TabForm from "./TabForm";
import AllExistReviews from "./AllExistReviews";
import { Review } from "@/shared/types";

type Props = {
  reviews: Review[] | undefined;
};

const ReviewsTab = ({ reviews }: Props) => {
  return (
    <Fragment>
      <AllExistReviews reviews={reviews} />
      <TabForm />
    </Fragment>
  );
};

export default ReviewsTab;
