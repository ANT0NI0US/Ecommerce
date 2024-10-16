import FavoriteProductTableRow from "./FavoriteProductTableRow";
import Table from "@/ui/Table";
import { Item } from "@/utils/types";

const tableHeadCells = ["Image", "Title", "Price", "Actions"];

interface favoriteTableProps {
  perfectItems: Item[];
}

export default function FavoriteProductTable({
  perfectItems,
}: favoriteTableProps) {
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
            <FavoriteProductTableRow
              perfectItem={perfectItem}
              key={perfectItem?.id}
            />
          )}
        />
      </Table>
    </div>
  );
}
