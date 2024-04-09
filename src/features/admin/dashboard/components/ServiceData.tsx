import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  productCardProps,
  productState,
  serviceProps,
  userProps,
  userState,
} from "@/shared/types";
import { AppDispatch } from "@/store";
import { getProducts } from "@/store/service/productService";
import { getUsers } from "@/store/service/userService";

type Props = {
  service: serviceProps;
  index: number;
};

const ServiceData = ({ service, index }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { allProducts }: { allProducts: productCardProps[] } = useSelector(
    (state: productState) => state.product
  );
  const { allUsers }: { allUsers: userProps[] } = useSelector(
    (state: userState) => state.user
  );
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, [dispatch]);

  const allData = [0, 0, allProducts.length, allUsers.length];
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
      className={`${service.bg} p-5 rounded-md flex-col w-full text-left`}
    >
      <h3 className="text-primary-color text-lg font-[700]">{service.title}</h3>
      <p className="text-xl font-extrabold text-[#474747]">{allData[index]}</p>
    </motion.div>
  );
};

export default ServiceData;
