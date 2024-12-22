import CartDetails from "../components/CartDetails";
import CommonSection from "@/ui/CommonSection";
import Container from "@/ui/Container";
import useHelmet from "@/hooks/useHelmet";

export default function Cart() {
  useHelmet("Shopping Cart");

  return (
    <>
      <CommonSection title="Shopping Cart" />
      <section className="py-[40px] md:py-[80px]">
        <Container>
          <CartDetails />
        </Container>
      </section>
    </>
  );
}
