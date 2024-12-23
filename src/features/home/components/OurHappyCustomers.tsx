import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadText from "@/ui/HeadText";
import StarRatings from "@/ui/StarRatings";
import Spinner from "@/ui/spinner/Spinner";
import Container from "@/ui/Container";
import Slider from "@/ui/Slider";
import { productState, Review } from "@/utils/types";
import { AppDispatch } from "@/store";
import { getProducts } from "@/store/service/productService";

export default function OurHappyCustomers() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: productState) => state.product);

  const [randomReviews, setRandomReviews] = useState<Review[]>([]);

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((allProducts) => {
        if (allProducts?.length > 0) {
          const selectedProducts = [...allProducts]
            ?.sort(() => 0.5 - Math.random())
            ?.slice(0, 6);

          const reviews = selectedProducts?.map((product) => {
            let randomReview: Review = {
              rating: 5,
              text: "this is the best service i have ever seen.",
              name: "Antonious nasr",
            };
            if (product.reviews) {
              randomReview =
                product?.reviews[
                  Math.floor(Math.random() * product?.reviews.length)
                ];
            }
            return randomReview;
          });

          setRandomReviews(reviews);
        }
      });
  }, [dispatch]);

  if (isLoading) return <Spinner height="h-[300px]" />;

  return (
    <section className="pb-[40px] md:py-[80px]">
      <Container>
        <HeadText text="Our Happy Customers" />
        <Slider>
          {randomReviews?.map((review: Review, index: number) => (
            <div
              key={index}
              className="mx-2 h-[200px] max-h-full overflow-y-auto rounded-md border-[.5px] border-orange-color-light dark:border-secondary-color"
            >
              <div className="space-y-2 p-6">
                <StarRatings readOnly={true} defaultRating={5} size={25} />
                <h3 className="text-lg font-semibold capitalize text-orange-color-light dark:text-orange-color">
                  {review?.name}
                </h3>
                <p className="text-sm font-medium leading-7">{review?.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
