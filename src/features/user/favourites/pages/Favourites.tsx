import useHelmet from "@/hooks/useHelmet";
import CommonSection from "@/ui/CommonSection";
import FavouriteProductTable from "../components/FavouriteProductTable";

export default function Favourites() {
  useHelmet("Favourites");
  return (
    <>
      <CommonSection title="My Favourites" />
      <FavouriteProductTable />
    </>
  );
}
