import { ordersFireBase } from "@/utils/types";
import Information from "./Information";
import InformationTitle from "./InformationTitle";
import ModalFormGrid from "@/ui/ModalFormGrid";

interface Props {
  order: ordersFireBase;
}

export default function OrderDetailsInfo({ order }: Props) {
  const {
    name,
    phone,
    email,
    address,
    city,
    code,
    country,
    orderDate,
    deliveryDate,
  } = order;
  const orderDetails = [
    { text: "Name", value: name },
    { text: "Phone", value: phone },
    { text: "Email", value: email },
    { text: "Address", value: address },
    { text: "City", value: city },
    { text: "Code", value: code },
    { text: "Country", value: country },
  ];

  return (
    <div>
      <InformationTitle
        title="information"
        subTitle={`( ${orderDate} - ${deliveryDate} )`}
      />
      <ModalFormGrid>
        {orderDetails?.map(({ text, value }) => (
          <Information key={text} text={text} value={value} />
        ))}
      </ModalFormGrid>
    </div>
  );
}
