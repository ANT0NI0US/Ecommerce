import Table from "@/ui/Table";
import FavouriteProductTableRow from "./FavouriteProductTableRow";
import { Item } from "@/utils/types";

const tableHeadCells = ["Image", "Title", "Price", "Actions"];

interface favroutiteTableProps {
  perfectItems: Item[];
}

export default function FavouriteProductTable({
  perfectItems,
}: favroutiteTableProps) {
  return (
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
  );
}
