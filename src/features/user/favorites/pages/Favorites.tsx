import { useSelector } from "react-redux";
import FavoriteProductTable from "../components/FavoriteProductTable";
import CommonSection from "@/ui/CommonSection";
import { cartSliceState } from "@/utils/types";
import useHelmet from "@/hooks/useHelmet";

export default function Favorites() {
  useHelmet("Favorites");
  const { perfectItems } = useSelector((state: cartSliceState) => state.cart);
  return (
    <>
      <CommonSection title="My Favorites" />
      <section className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
        {perfectItems.length === 0 ? (
          <h2 className="flexCenter mx-auto w-[90%] py-[80px] text-center text-xl font-semibold md:w-5/6">
            No items Added To The Favorites
          </h2>
        ) : (
          <FavoriteProductTable perfectItems={perfectItems} />
        )}
      </section>
    </>
  );
}
