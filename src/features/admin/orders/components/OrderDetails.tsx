import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { getOrderById } from "@/store/service/ordersService";
import { orderState, ordersFireBase } from "@/utils/types";
import Spinner from "@/ui/spinner/Spinner";
import OrderDetailsInfo from "./OrderDetailsInfo";
import OrderItems from "./OrderItems";

interface Props {
  selectedOrderId: string | undefined;
}

export default function OrderDetails({ selectedOrderId }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { isCertainOrderLoading, order } = useSelector(
    (state: orderState) => state.order,
  );

  const { userPhoto, items, name, phone, email, address, city, code, country } =
    order as ordersFireBase;

  useEffect(() => {
    if (selectedOrderId) {
      dispatch(getOrderById(selectedOrderId));
    }
  }, [dispatch, selectedOrderId]);

  if (isCertainOrderLoading) return <Spinner />;

  return (
    <>
      <div className="mx-auto mt-4 h-20 w-20">
        <img
          src={userPhoto}
          alt="user-image"
          className="object-contain object-center"
        />
      </div>

      <OrderItems items={items} />

      <OrderDetailsInfo
        name={name}
        phone={phone}
        email={email}
        address={address}
        city={city}
        code={code}
        country={country}
      />
    </>
  );
}
