import Helmet from "@/components/UI/helmet/Helmet";
import AddProduct from "../modal/AddProduct";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { productCardProps, productState } from "@/shared/types";
import { toast } from "react-toastify";
import { deleteProduct, getProducts } from "@/store/service/productService";
import { FadeLoader } from "react-spinners";
import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";

const columnsHead = ["Image", "Title", "Category", "Price", "Actions"];
const columnHeadStyle =
  "px-4 py-7 text-center text-lg font-black text-primary-color capitalize tracking-wider";

const AllProducts = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const {
    isLoading,
    allProducts,
  }: { isLoading: boolean; allProducts: productCardProps[] } = useSelector(
    (state: productState) => state.product
  );

  const deleteSpecificProduct = (id: string) => {
    dispatch(deleteProduct(id))
      .unwrap()
      .then(() => {
        toast.success("Product has been deleted successfully");
      })
      .catch(() => {
        toast.success("Something went wrong");
      });
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Helmet title="AllProducts">
      <CommonSection title="All Products" />
      <AddProduct
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
      <div className="w-full flexCenter mt-5">
        <button
          className="transition-colors duration-[0.5s] rounded py-2 px-5 w-5/6 btn-banner"
          onClick={() => setShowModal(!showModal)}
        >
          Add Product
        </button>
      </div>
      <section className="w-full pb-[60px] pt-[20px]">
        {allProducts.length === 0 ? (
          <h2 className="mt-2">No Products to be displayed</h2>
        ) : (
          <div className="w-5/6 mx-auto overflow-x-auto">
            <table className="w-full max-w-full space-y-6">
              <thead>
                <tr className="border-b">
                  {columnsHead.map((column, index) => (
                    <th key={index} className={columnHeadStyle}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5}>
                      <div className="flexCenter mt-10 w-full">
                        <FadeLoader color="#36d7b7" />
                      </div>
                    </td>
                  </tr>
                ) : (
                  allProducts?.map(
                    (product: productCardProps, index: number) => (
                      <tr
                        className={`${
                          allProducts?.length - 1 === index ? "" : "border-b"
                        }`}
                        key={product.id}
                      >
                        <td className="min-w-[125px] min-h-[125px]  flexCenter text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                          <img
                            src={product.imgUrl}
                            alt={product.productName}
                            className="w-[80px] h-[80px] bg-cover"
                          />
                        </td>
                        <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                          {product.productName}
                        </td>
                        <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                          {product.category}
                        </td>
                        <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                          ${product.price}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          <motion.div
                            onClick={() => {
                              deleteSpecificProduct(product.id);
                            }}
                            whileTap={{ scale: 1.2 }}
                            className=" bg-red-700 py-2 px-4 rounded-full flexCenter gap-1 cursor-pointer text-white"
                          >
                            <AiFillDelete className="text-[1.2rem]" />
                            <span>Delete</span>
                          </motion.div>
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default AllProducts;
