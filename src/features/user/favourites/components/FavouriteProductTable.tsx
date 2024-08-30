import { cartSliceState } from "@/shared/types";
import Table from "@/ui/Table";
import { useSelector } from "react-redux";
import FavouriteProductTableRow from "./FavouriteProductTableRow";

const tableHeadCells = ["Image", "Title", "Price", "Actions"];

export default function FavouriteProductTable() {
  const { perfectItems } = useSelector((state: cartSliceState) => state.cart);
  return (
    <section className="w-full py-[80px]">
      <div className="mx-auto w-[90%] md:w-5/6">
        <Table>
          <Table.Header>
            {tableHeadCells.map((headCell, index) => (
              <Table.Cell key={index} isHeader>
                {headCell}
              </Table.Cell>
            ))}
          </Table.Header>
          <Table.Body
            data={perfectItems}
            render={(perfectItem) => (
              <FavouriteProductTableRow
                perfectItem={perfectItem}
                key={perfectItem?.id}
              />
            )}
          />
        </Table>
      </div>
    </section>
  );
}
