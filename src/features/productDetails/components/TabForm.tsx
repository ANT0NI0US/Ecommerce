import { AppDispatch } from "@/store";
import { addReviewToProduct } from "@/store/service/productService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const starValues = [1, 2, 3, 4, 5];

export default function TabForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const [rate, setRate] = useState<number | null>(null);
  const [reviewName, setReviewName] = useState<string>("");
  const [reviewComment, setReviewComment] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      const newReview = {
        name: reviewName,
        text: reviewComment,
        rating: rate,
      };
      dispatch(addReviewToProduct({ productId: id, review: newReview }));
      toast.success("Review Submitted");
      setReviewName("");
      setReviewComment("");
      setRate(null);
    }
  };
  return (
    <div className="m-auto mt-[40px] w-full sm:w-[70%]">
      <h4 className="text-center text-[1.2rem] font-semibold sm:text-left">
        Leave Your Experience
      </h4>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 py-4"
      >
        <input
          className="input_style"
          type="text"
          value={reviewName}
          onChange={(e) => {
            setReviewName(e.target.value);
          }}
          required
          placeholder="Enter Name"
        />
        <div className="flex items-center gap-2">
          {starValues.map((value, index) => (
            <motion.span
              key={index}
              className="flex items-center gap-1"
              whileTap={{ scale: 1.1 }}
              onClick={() => setRate(value)}
            >
              {value}
              <FaStar className="cursor-pointer font-semibold text-lime-600" />
            </motion.span>
          ))}
        </div>
        <textarea
          value={reviewComment}
          onChange={(e) => {
            setReviewComment(e.target.value);
          }}
          required
          className="input_style"
          placeholder="Review Message..."
          rows={3}
        />
        <motion.button
          aria-label="submit"
          className="btn btn-banner mt-7 md:mt-11"
          whileTap={{ scale: 1.1 }}
          type="submit"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
}
