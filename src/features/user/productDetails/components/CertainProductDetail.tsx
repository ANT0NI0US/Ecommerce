import { productCardProps } from "@/utils/types";
import DetailsAction from "./DetailsAction";
import StarRatings from "@/ui/StarRatings";

interface CertainProductDetailProps {
  product: productCardProps;
}

function adjustRating(avgRating: number | undefined) {
  if (typeof avgRating !== "number" || isNaN(avgRating)) {
    return 0;
  }
  return Math.round(avgRating);
}

export default function CertainProductDetail({
  product,
}: CertainProductDetailProps) {
  const { id, imgUrl, productName, price, avgRating, category, shortDesc } =
    product;

  const adjustedRating = adjustRating(avgRating);

  return (
    <section
      id="my-product"
      className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color md:h-[calc(100vh-160px)]"
    >
      <div className="flexBetween mx-auto h-full w-[90%] flex-col gap-12 sm:w-5/6 md:flex-row">
        <div className="flexCenter h-full md:basis-1/2">
          {/* Product Image */}
          <img
            className="h-full max-h-full w-full max-w-full object-contain xs:h-[500px] md:h-full"
            src={imgUrl}
            alt={productName}
          />
        </div>
        <div className="space-y-4 text-center md:basis-1/2 md:text-left">
          {/* Product Head Details */}
          <h2 className="text-2xl font-semibold md:text-3xl">{productName}</h2>
          <p className="text-sm leading-6">{shortDesc}</p>

          {/* Ratings for the Product */}
          <div className="flexCenter flex-col gap-1 sm:flex-row sm:gap-9 md:justify-start">
            <StarRatings
              defaultRating={adjustedRating}
              size={30}
              readOnly={true}
            />
            <p className="leading-[28px]">
              (
              <span className="font-[600] text-lime-600">
                {" "}
                {adjustedRating}{" "}
              </span>
              Ratings )
            </p>
          </div>

          {/* Product Details */}
          <div className="flexBetween flex-col gap-4 sm:flex-row sm:justify-evenly md:justify-between">
            <p className="font-medium">
              Price:
              <span className="font-semibold capitalize"> ${price}</span>
            </p>
            <p className="font-medium">
              Category:
              <span className="font-semibold capitalize"> {category}</span>
            </p>
          </div>

          {/* Product Actions */}
          <DetailsAction
            id={id}
            productName={productName}
            price={price}
            imgUrl={imgUrl}
          />
        </div>
      </div>
    </section>
  );
}
