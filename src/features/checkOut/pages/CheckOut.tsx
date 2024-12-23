import BillsDetails from "../components/BillsDetails";
import CommonSection from "@/ui/CommonSection";
import Container from "@/ui/Container";
import useHelmet from "@/hooks/useHelmet";

export default function CheckOut() {
  useHelmet("Checkout");

  return (
    <>
      <CommonSection title="Checkout" />
      <section className="py-[40px] md:py-[80px]">
        <Container>
          <BillsDetails />
        </Container>
      </section>
    </>
  );
}
