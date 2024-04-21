import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  orderState,
  productState,
  serviceProps,
  userProps,
  userState,
} from "@/shared/types";
import { AppDispatch } from "@/store";
import { getProducts } from "@/store/service/productService";
import { getUsers } from "@/store/service/userService";
import { getOrders } from "@/store/service/ordersService";

type Props = {
  service: serviceProps;
  index: number;
};

const ServiceData = ({ service, index }: Props) => {
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

  const allData = [
    `${totalAmount} $`,
    allOrders.length,
    allProducts.length,
    allUsers.length,
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: index % 2 === 0 ? -50 : 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      key={index}
      className={`${service.bg} w-full flex-col rounded-md p-5 text-left`}
    >
      <h3 className="text-lg font-[700] text-primary-color">{service.title}</h3>
      <p className="text-xl font-extrabold text-[#474747]">{allData[index]}</p>
    </motion.div>
  );
};

export default ServiceData;
