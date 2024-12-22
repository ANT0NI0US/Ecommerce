import { useSelector } from "react-redux";
import FavoriteProductTable from "../components/FavoriteProductTable";
import CommonSection from "@/ui/CommonSection";
import Container from "@/ui/Container";
import { cartSliceState } from "@/utils/types";
import useHelmet from "@/hooks/useHelmet";

export default function Favorites() {
  useHelmet("Favorites");
  const { perfectItems } = useSelector((state: cartSliceState) => state.cart);
  return (
    <>
      <CommonSection title="Favorites" />
      <section className="w-full py-[40px] md:py-[80px]">
        <Container>
          <FavoriteProductTable perfectItems={perfectItems} />
        </Container>
      </section>
    </>
  );
}
