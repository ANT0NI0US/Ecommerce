import Helmet from "@/components/UI/helmet/Helmet";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import {
  productCardProps,
  productState,
  userProps,
  userState,
} from "@/shared/types";
import { useEffect } from "react";
import { getProducts } from "@/store/service/productService";
import { getUsers } from "@/store/service/userService";

interface serviceProps {
  title: string;
  bg: string;
}

const serviceData: serviceProps[] = [
  {
    title: "Total Sales",
    bg: "bg-card-bg-01",
  },
  {
    title: "Orders",
    bg: "bg-card-bg-02",
  },
  {
    title: "Total Products",
    bg: "bg-card-bg-03",
  },
  {
    title: "Total Users",
    bg: "bg-card-bg-04",
  },
];

const Dashboard = () => {
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

  const allData = [717, 900, allProducts.length, allUsers.length];
  return (
    <Helmet title="Dashboard">
      <CommonSection title="Dashboard" />
      <section className="w-full py-[60px]">
        <div className="w-5/6 mx-auto flexCenter flex-col md:flex-row gap-[10px]">
          {serviceData.map((item, index) => (
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
              className={`${item.bg} p-5 rounded-md flex-col w-full text-left`}
            >
              <h3 className="text-primary-color text-lg font-[700]">
                {item.title}
              </h3>
              <p className="text-xl font-extrabold text-[#474747]">
                {allData[index]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Helmet>
  );
};

export default Dashboard;
