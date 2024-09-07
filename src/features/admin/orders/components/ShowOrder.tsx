import Modal from "@/ui/Modal";
import { ReactElement } from "react";
import OrderDetails from "./OrderDetails";

// PROPS
interface orderDetailsProps {
  children: ReactElement;
  selectedOrderId: string | undefined;
}

export default function ShowOrder({
  children,
  selectedOrderId,
}: orderDetailsProps) {
  return (
    <Modal>
      <Modal.Open opens="orderDetails">{children}</Modal.Open>
      <Modal.Window name="orderDetails">
        {() => <OrderDetails selectedOrderId={selectedOrderId} />}
      </Modal.Window>
    </Modal>
  );
}
