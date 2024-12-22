import CommonSection from "@/ui/CommonSection";
import useHelmet from "@/hooks/useHelmet";
import Container from "@/ui/Container";
import BillsDetails from "../components/BillsDetails";

export default function CheckOut() {
  useHelmet("Checkout");

  return (
    <>
      <CommonSection title="Checkout" />
      <section className=" py-[40px] md:py-[80px]">
        <Container>
          <BillsDetails />
        </Container>
      </section>
    </>
  );
}
