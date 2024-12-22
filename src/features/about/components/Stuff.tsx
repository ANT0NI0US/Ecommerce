import Carousel from "react-multi-carousel";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import CardStuff from "./CardStuff";
import Container from "@/ui/Container";

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

const AllStuff = [
  {
    id: 1,
    name: "Tom Cruise",
    job: "Founder & Chairman",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2FstuffOne.webp?alt=media&token=00cc0d21-dad3-4457-961c-cacaa377a65a",
  },
  {
    id: 2,
    name: "Emma Watson",
    job: "Managing Director",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2FstuffTwo.webp?alt=media&token=f891abcd-0537-4bdb-a007-c665c8041c06",
  },
  {
    id: 3,
    name: "Will Smith",
    job: "Product Designer",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2FstuffThree.webp?alt=media&token=b10cf94c-c856-4082-9acd-60bafc475e9c",
  },
  {
    id: 4,
    name: "John Doe",
    job: "Software Engineer",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2FstuffFour.webp?alt=media&token=bce4ef1f-8717-4ec5-a216-87a771a021b0",
  },
  {
    id: 5,
    name: "Jane Smith",
    job: "Marketing Specialist",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2FstuffFive.webp?alt=media&token=4817294f-103d-4ba1-a2b5-d7fcbd910705",
  },
];

export default function Stuff() {
  return (
    <section className="w-full py-[40px] md:py-[80px]">
      <Container>
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
          {AllStuff?.map((singleStuff) => (
            <div
              key={singleStuff.id}
              className="mx-2 rounded-md shadow-md shadow-secondary-color-light dark:shadow-secondary-color"
            >
              <CardStuff singleStuff={singleStuff} />
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
