import ModalFormGrid from "@/ui/ModalFormGrid";

interface Props {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  code: string;
  country: string;
}

const cardStyle =
  "flex flex-wrap gap-1 rounded-md bg-secondary-color-light p-[8px] text-primary-color-light dark:bg-secondary-color/50 dark:text-primary-color";

export default function OrderDetailsInfo({
  name,
  phone,
  email,
  address,
  city,
  code,
  country,
}: Props) {
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
    <ModalFormGrid>
      {orderDetails?.map((detail, index) => (
        <div key={index} className={`${cardStyle}`}>
          <p className="font-black">{detail.text}: </p>
          <span className="capitalize">{detail.value}</span>
        </div>
      ))}
    </ModalFormGrid>
  );
}
