import Helmet from "@/components/UI/helmet/Helmet";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import FavouriteProductTable from "../components/FavouriteProductTable";

const Favourites = () => {
  return (
    <Helmet title="Favourites">
      <CommonSection title="My Favourites" />
      <FavouriteProductTable />
    </Helmet>
  );
};

export default Favourites;
