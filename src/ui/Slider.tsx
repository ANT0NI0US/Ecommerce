import Carousel from "react-multi-carousel";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface sliderProps {
  children: React.ReactNode;
}

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

export default function Slider({ children }: sliderProps) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      customLeftArrow={
        <MdArrowBackIosNew
          size={40}
          className="absolute left-4 top-1/2 -translate-y-[50%] cursor-pointer rounded-full bg-transparent p-2 text-main-color/50 transition-all hover:bg-light-color dark:text-light-color dark:hover:bg-main-color/50"
        />
      }
      customRightArrow={
        <MdArrowForwardIos
          size={40}
          className="absolute right-4 top-1/2 -translate-y-[50%] cursor-pointer rounded-full bg-transparent p-2 text-main-color/50 transition-all hover:bg-light-color dark:text-light-color dark:hover:bg-main-color/50"
        />
      }
      containerClass="container-with-dots"
      draggable
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      shouldResetAutoplay
      slidesToSlide={1}
      swipeable
      responsive={responsive}
      className="py-3"
    >
      {children}
    </Carousel>
  );
}
