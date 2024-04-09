import { cartSliceState } from "@/shared/types";
import { useSelector } from "react-redux";
import FavProductTableContent from "./FavProductTableContent";

const columnsHead = ["Image", "Title", "Price", "Actions"];
const columnHeadStyle =
  "py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider";

const FavouriteProductTable = () => {
  const { perfectItems } = useSelector((state: cartSliceState) => state.cart);

  return (
    <section className="w-full py-[60px]">
      {perfectItems.length === 0 ? (
        <h2 className="mt-2">No item Added To The Favourites</h2>
      ) : (
        <div className="w-5/6 mx-auto overflow-x-auto">
          <table className="w-full max-w-full space-y-6">
            <thead>
              <tr className="border-b">
                {columnsHead.map((column, index) => (
                  <th key={index} className={columnHeadStyle}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <FavProductTableContent perfectItems={perfectItems} />
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default FavouriteProductTable;
