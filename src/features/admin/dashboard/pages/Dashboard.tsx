import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { FaRepeat, FaTruck } from "react-icons/fa6";
import CommonSection from "@/ui/CommonSection";
import Widgets from "@/ui/Widgets";
import {
  orderState,
  productState,
  userProps,
  userState,
  widgetProps,
} from "@/utils/types";
import useHelmet from "@/hooks/useHelmet";
import { AppDispatch } from "@/store";
import { getProducts } from "@/store/service/productService";
import { getUsers } from "@/store/service/userService";
import { getOrders } from "@/store/service/ordersService";

const iconStyle: string =
  "h-7 w-7 text-light-color dark:text-light-color md:h-5 md:w-5";

export default function Dashboard() {
  useHelmet("Dashboard");

  const dispatch = useDispatch<AppDispatch>();
  const { allProducts } = useSelector((state: productState) => state.product);
  const { allUsers }: { allUsers: userProps[] } = useSelector(
    (state: userState) => state.user,
  );
  const { allOrders } = useSelector((state: orderState) => state.order);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
    dispatch(getOrders());
  }, [dispatch]);

  const totalAmount = allOrders.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.itemsAmount;
  }, 0);

  const serviceData: widgetProps[] = useMemo(
    () => [
      {
        icon: <FaTruck className={iconStyle} />,
        title: "Total Sales",
        description: `${totalAmount}$`,
      },
      {
        icon: <FaRepeat className={iconStyle} />,
        title: "Orders",
        description: allOrders.length.toString(),
      },
      {
        icon: <MdOutlinePayment className={iconStyle} />,
        title: "Total Products",
        description: allProducts.length.toString(),
      },
      {
        icon: <RiExchangeDollarLine className={iconStyle} />,
        title: "Total Users",
        description: allUsers.length.toString(),
      },
    ],
    [allOrders, allProducts, allUsers, totalAmount],
  );

  return (
    <>
      <CommonSection title="Dashboard" />
      <section className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
        <Widgets widgetsData={serviceData} />
      </section>
    </>
  );
}
