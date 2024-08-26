import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import { AiFillDelete } from "react-icons/ai";

import { newProductProps } from "@/shared/types";
import { AppDispatch } from "@/store";
import { deleteProduct } from "@/store/service/productService";

interface Props {
  allProducts: newProductProps[] | undefined;
}

const tableDateStyle = "whitespace-nowrap px-6 py-4 text-center text-base";

const ProductTableContent = ({ allProducts }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteSpecificProduct = (id: string) => {
    dispatch(deleteProduct(id))
      .unwrap()
      .then(() => {
        toast.success("Product has been deleted successfully");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return allProducts?.map((product: newProductProps, index: number) => (
    <tr
      className={`${allProducts?.length - 1 === index ? "" : "border-b"}`}
      key={product?.id}
    >
      <td
        className={`flexCenter min-h-[125px] min-w-[125px] text-primary-color ${tableDateStyle}`}
      >
        <img
          src={
            typeof product?.imgUrl === "string" ? product?.imgUrl : undefined
          }
          alt={product?.productName}
          className="h-[80px] w-[80px] bg-cover"
        />
      </td>
      <td className={`text-primary-color ${tableDateStyle}`}>
        {product?.productName}
      </td>
      <td className={`text-primary-color ${tableDateStyle}`}>
        {product?.category}
      </td>
      <td className={`text-primary-color ${tableDateStyle}`}>
        ${product?.price}
      </td>
      <td className={`${tableDateStyle}`}>
        <motion.div
          onClick={() => {
            if (product.id) {
              deleteSpecificProduct(product?.id);
            }
          }}
          whileTap={{ scale: 1.2 }}
          className=" flexCenter cursor-pointer gap-1 rounded-full bg-red-700 px-4 py-2 text-light-color"
        >
          <AiFillDelete className="text-[1.2rem]" />
          <span>Delete</span>
        </motion.div>
      </td>
    </tr>
  ));
};

export default ProductTableContent;
