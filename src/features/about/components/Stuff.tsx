import CardStuff from "./CardStuff";
import Slider from "@/ui/Slider";
import Container from "@/ui/Container";

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
    <section className="py-[40px] md:py-[80px]">
      <Container>
        <Slider>
          {AllStuff?.map((singleStuff) => (
            <div
              key={singleStuff.id}
              className="mx-2 rounded-md shadow-md shadow-secondary-color-light dark:shadow-secondary-color"
            >
              <CardStuff singleStuff={singleStuff} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
