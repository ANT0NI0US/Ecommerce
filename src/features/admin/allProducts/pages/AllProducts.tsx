import { useState } from "react";

import CommonSection from "@/ui/CommonSection";
import AddProduct from "../components/modal/AddProduct";

import ProductTable from "../components/ProductTable";
import AddProductBtn from "../components/AddProductBtn";
import useHelmet from "@/hooks/useHelmet";

export default function AllProducts() {
  useHelmet("AllProducts");
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <CommonSection title="All Products" />
      <AddProduct
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
      <AddProductBtn toggleModal={toggleModal} />
      <section className="w-full pb-[60px] pt-[20px]">
        <ProductTable />
      </section>
    </>
  );
}
