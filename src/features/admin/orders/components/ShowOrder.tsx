import Modal from "@/ui/Modal";
import { ReactElement } from "react";
import OrderDetails from "./OrderDetails";

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
        {({ onCloseModal }) => (
          <OrderDetails
            selectedOrderId={selectedOrderId}
            onCloseModal={onCloseModal}
          />
        )}
      </Modal.Window>
    </Modal>
  );
}
