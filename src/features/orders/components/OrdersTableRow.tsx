import { parse, isBefore } from "date-fns";
import Table from "@/ui/Table";
import { ordersFireBase } from "@/utils/types";
import ShowOrder from "./ShowOrder";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

type orderProps = {
  order: ordersFireBase;
};

function isDateInThePast(deliveredDate: string): boolean {
  const currentDate = new Date();
  const endDateObject = parse(deliveredDate, "dd MMM yyyy", new Date());
  return isBefore(endDateObject, currentDate);
}

export default function OrdersTableRow({ order }: orderProps) {
  return (
    <Table.Row key={order.id}>
      <Table.Cell>{order.name}</Table.Cell>
      <Table.Cell>{order.phone}</Table.Cell>
      <Table.Cell>{order.itemsAmount}$</Table.Cell>
      <Table.Cell>{order.orderDate}</Table.Cell>
      <Table.Cell>
        {isDateInThePast(order.deliveryDate) ? (
          <div className="rounded-full border border-orange-color-light p-1 dark:border-orange-color">
            <FaCheck className="text-orange-color-light dark:text-orange-color" />
          </div>
        ) : (
          <div className="rounded-full border border-[#880808] p-1 dark:border-[#d47e6c]">
            <FaXmark className="text-[#880808] dark:text-[#d47e6c]" />
          </div>
        )}
      </Table.Cell>
      <Table.Cell>
        <ShowOrder selectedOrderId={order.id} />
      </Table.Cell>
    </Table.Row>
  );
}
