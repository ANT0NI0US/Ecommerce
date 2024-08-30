import Header from "@/shared/Header";
import Carousel from "react-multi-carousel";
import StarRatings from "@/ui/StarRatings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch } from "@/store";
import { getProducts } from "@/store/service/productService";
import { productState, Review } from "@/shared/types";
import Spinner from "@/ui/spinner/Spinner";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1060 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1060, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

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
    <section className="w-full bg-secondary-color py-[80px]">
      <div className="mx-auto w-[90%] bg-secondary-color md:w-5/6">
        <Header textHead="Our Happy Customers" />
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          //   centerMode={true}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          rtl={false}
          shouldResetAutoplay
          slidesToSlide={1}
          swipeable
          responsive={responsive}
          className="py-3"
        >
          {randomReviews?.map((review: Review, index: number) => (
            <div
              key={index}
              className="mx-2 h-[200px] max-h-full overflow-y-auto rounded-md border-[.5px] border-main-color"
            >
              <div className="space-y-2 p-6">
                <StarRatings readOnly={true} defaultRating={5} size={25} />
                <h3 className="text-lg font-semibold capitalize text-orange-color">
                  {review?.name}
                </h3>
                <p className="text-sm font-medium leading-7">{review?.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
