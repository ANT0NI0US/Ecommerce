import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderState } from "@/shared/types";
import { AppDispatch } from "@/store";
import { getOrders } from "@/store/service/ordersService";
import GridContainer from "@/ui/GridContainer";
import Spinner from "@/ui/spinner/Spinner";

export default function AllOrders() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, allOrders } = useSelector(
    (state: orderState) => state.order,
  );

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  if (allOrders?.length === 0) {
    return (
      <h2 className="flexCenter mx-auto w-[90%] py-[80px] text-center text-xl font-semibold md:w-5/6">
        No Orders found.
      </h2>
    );
  }

  return (
    <GridContainer>
      {allOrders?.map((order) => (
        <div
          key={order.id}
          // onClick={() => {
          //   if (order.id) {
          //     toggleModal(order.id);
          //   }
          // }}
          className="flexBetween cursor-pointer flex-col rounded-md p-3  shadow-md drop-shadow-2xl transition-all duration-500 hover:shadow-2xl  hover:shadow-primary-color-light dark:shadow-secondary-color dark:hover:shadow-primary-color"
        >
          <div className="w-full">
            <h1 className="text-xl font-semibold text-orange-color-light dark:text-orange-color">
              {order.name}
            </h1>
            <ul className="mt-5 list-inside list-disc space-y-2 text-sm">
              <li>
                (+{order.code}) {order.phone}
              </li>
              <li>{order.address}</li>
              <li>{order.city}</li>
              <li>{order.country}</li>
            </ul>
          </div>
        </div>
      ))}
    </GridContainer>
  );
}
