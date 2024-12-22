import CommonSection from "@/ui/CommonSection";
import useHelmet from "@/hooks/useHelmet";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { orderState } from "@/utils/types";
import { useEffect, useMemo } from "react";
import { getOrders } from "@/store/service/ordersService";
import useAuth from "@/hooks/useAuth";
import Container from "@/ui/Container";
import OrdersTable from "../components/OrdersTable";

interface CurrentUser {
  uid: string;
}

export default function Orders() {
  useHelmet("Orders");

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, allOrders } = useSelector(
    (state: orderState) => state.order,
  );
  const currentUser = useAuth();

  const { uid } = currentUser as CurrentUser;

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const filteredOrders = useMemo(
    () => allOrders.filter((order) => order.userId === uid),
    [allOrders, uid],
  );

  return (
    <>
      <CommonSection title="Orders" />
      <section className="py-[40px] md:py-[80px]">
        <Container>
          <OrdersTable orders={filteredOrders} loading={isLoading} />
        </Container>
      </section>
    </>
  );
}
