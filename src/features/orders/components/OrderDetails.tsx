import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItems from "./OrderItems";
import OrderDetailsInfo from "./OrderDetailsInfo";
import Spinner from "@/ui/spinner/Spinner";
import { orderState } from "@/utils/types";
import { AppDispatch } from "@/store";
import { getOrderById } from "@/store/service/ordersService";
import Empty from "@/ui/Empty";

interface Props {
  selectedOrderId: string | undefined;
}

export default function OrderDetails({ selectedOrderId }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { isCertainOrderLoading, order } = useSelector(
    (state: orderState) => state.order,
  );

  useEffect(() => {
    if (selectedOrderId) {
      dispatch(getOrderById(selectedOrderId));
    }
  }, [dispatch, selectedOrderId]);

  if (isCertainOrderLoading) return <Spinner height="h-[50vh]" />;

  if (!order) return <Empty title="No Orders have been found" />;

  return (
    <>
      <h1 className="rounded-tl-lg rounded-tr-lg border-b bg-white py-4 ps-4 text-xl font-bold uppercase tracking-widest text-primary-color-light shadow-sm dark:bg-black dark:text-primary-color sm:text-3xl">
        Order Details
      </h1>
      <div className="flex max-h-[calc(80vh-125px)] flex-col gap-[15px] overflow-auto p-[15px] md:gap-[20px] md:p-[20px]">
        <OrderItems order={order} />

        <OrderDetailsInfo order={order} />
      </div>
    </>
  );
}
