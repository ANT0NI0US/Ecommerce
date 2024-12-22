import OrdersTableRow from "./OrdersTableRow";
import Empty from "@/ui/Empty";
import Spinner from "@/ui/spinner/Spinner";
import Table from "@/ui/Table";
import { ordersFireBase } from "@/utils/types";

type ordersTableProps = {
  orders: ordersFireBase[];
  loading: boolean;
};

const tableHeadCells = [
  "Name",
  "Phone",
  "price",
  "order Date",
  "delivered",
  "",
];

export default function OrdersTable({ orders, loading }: ordersTableProps) {
  if (loading) return <Spinner />;
  if (!orders || !orders.length)
    return <Empty title="No Orders Have been ordered" />;
  return (
    <Table>
      <Table.Header>
        {tableHeadCells.map((headCell, index) => (
          <Table.Cell key={index} isHeader>
            {headCell}
          </Table.Cell>
        ))}
      </Table.Header>
      <Table.Body
        data={orders}
        render={(order) => <OrdersTableRow order={order} key={order?.id} />}
      />
    </Table>
  );
}
