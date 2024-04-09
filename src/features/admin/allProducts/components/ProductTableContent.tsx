import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import { AiFillDelete } from "react-icons/ai";

import { productCardProps } from "@/shared/types";
import { AppDispatch } from "@/store";
import { deleteProduct } from "@/store/service/productService";

interface Props {
  allProducts: productCardProps[];
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

  return allProducts?.map((product: productCardProps, index: number) => (
    <tr
      className={`${allProducts?.length - 1 === index ? "" : "border-b"}`}
      key={product.id}
    >
      <td
        className={`min-w-[125px] min-h-[125px] flexCenter text-primary-color ${tableDateStyle}`}
      >
        <img
          src={product.imgUrl}
          alt={product.productName}
          className="w-[80px] h-[80px] bg-cover"
        />
      </td>
      <td className={`text-primary-color ${tableDateStyle}`}>
        {product.productName}
      </td>
      <td className={`text-primary-color ${tableDateStyle}`}>
        {product.category}
      </td>
      <td className={`text-primary-color ${tableDateStyle}`}>
        ${product.price}
      </td>
      <td className={`${tableDateStyle}`}>
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
  ));
};

export default ProductTableContent;
