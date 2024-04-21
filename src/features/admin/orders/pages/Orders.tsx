import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Helmet from "@/components/UI/helmet/Helmet";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import { orderState } from "@/shared/types";
import { AppDispatch } from "@/store";
import { getOrders } from "@/store/service/ordersService";
import ShowOrder from "../components/ShowOrder";

const Orders = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");

  const toggleModal = (orderId: string) => {
    setShowModal(!showModal);
    setSelectedOrderId(orderId);
  };

  const { allOrders } = useSelector((state: orderState) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <Helmet title="Orders">
      <CommonSection title="Orders" />
      <ShowOrder
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        selectedOrderId={selectedOrderId}
      />
      <section className="m-auto w-5/6 py-[60px]">
        {allOrders.length === 0 ? (
          <h2 className="mt-2">No orders to be displayed</h2>
        ) : (
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {allOrders.map((order) => (
              <div
                key={order.id}
                onClick={() => {
                  if (order.id) {
                    toggleModal(order.id);
                  }
                }}
                className="flexBetween cursor-pointer flex-col rounded-md p-3 shadow shadow-primary-color/30 hover:shadow-primary-color/40 "
              >
                <div className="w-full">
                  <h1 className="text-[1.3rem] font-[600] text-primary-color gridScreen:text-[1.2rem]">
                    {order.name}
                  </h1>
                  <p className="mt-5 text-[0.9rem]">
                    (+{order.code}) {order.phone}
                  </p>
                  <p className="text-[0.9rem]">{order.address}</p>
                  <p className="text-[0.9rem]">{order.city}</p>
                  <p className="text-[0.9rem]">{order.country}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default Orders;
