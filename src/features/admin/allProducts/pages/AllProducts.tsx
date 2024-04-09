import { useState } from "react";

import Helmet from "@/components/UI/helmet/Helmet";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import AddProduct from "../components/modal/AddProduct";

import ProductTable from "../components/ProductTable";
import AddProductBtn from "../components/AddProductBtn";

const AllProducts = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Helmet title="AllProducts">
      <CommonSection title="All Products" />
      <AddProduct
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
      <AddProductBtn toggleModal={toggleModal} />
      <section className="w-full pb-[60px] pt-[20px]">
        <ProductTable />
      </section>
    </Helmet>
  );
};

export default AllProducts;
