import useHelmet from "@/hooks/useHelmet";
import CommonSection from "@/ui/CommonSection";
import FavouriteProductTable from "../components/FavouriteProductTable";
import { cartSliceState } from "@/utils/types";
import { useSelector } from "react-redux";

export default function Favourites() {
  useHelmet("Favourites");
  const { perfectItems } = useSelector((state: cartSliceState) => state.cart);
  return (
    <>
      <CommonSection title="My Favourites" />
      <section className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
        {perfectItems.length === 0 ? (
          <h2 className="flexCenter mx-auto w-[90%] py-[80px] text-center text-xl font-semibold md:w-5/6">
            No items Added To The Favourites
          </h2>
        ) : (
          <FavouriteProductTable perfectItems={perfectItems} />
        )}
      </section>
    </>
  );
}
