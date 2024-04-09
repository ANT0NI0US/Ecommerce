import { Review } from "@/shared/types";

type Props = {
  reviews: Review[];
};

const AllExistReviews = ({ reviews }: Props) => {
  return (
    <ul className="mt-5">
      {reviews.map((review, index) => (
        <li
          key={index}
          className="mb-3 border-b-[1px] border-small-text-color pb-3"
        >
          <h6 className="font-extrabold text-lg text-primary-color capitalize">
            Antonious nasr
          </h6>
          <span className="block mb-2 font-semibold text-lime-600 ">
            {review.rating} (rating)
          </span>
          <p>{review.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default AllExistReviews;
