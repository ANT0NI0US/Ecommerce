import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";

import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";
import Button from "@/ui/Button";
import Table from "@/ui/Table";
import { Item } from "@/utils/types";

interface perfectItemProp {
  perfectItem: Item;
}

export default function FavouriteProductTableRow({
  perfectItem,
}: perfectItemProp) {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = (product: Item) => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      }),
    );
    toast.success("Product added successfully");
  };

  return (
    <Table.Row key={perfectItem.id}>
      <Table.Cell>
        <div className="flexCenter">
          <img
            src={
              typeof perfectItem.imgUrl === "string"
                ? perfectItem.imgUrl
                : undefined
            }
            alt={perfectItem.productName}
            className="h-16 max-h-full w-16 max-w-full 
             object-contain object-center sm:h-24 sm:w-24 lg:h-32 lg:w-32"
          />
        </div>
      </Table.Cell>
      <Table.Cell>{perfectItem.productName}</Table.Cell>
      <Table.Cell>${perfectItem.price}</Table.Cell>
      <Table.Cell>
        <motion.div className="mx-auto w-[135px]" whileTap={{ scale: 1.2 }}>
          <Button
            ArialLabel="add-To-Cart"
            variation="secondary"
            onClick={() => addToCart(perfectItem)}
          >
            <div className="flexCenter gap-1">
              <p>Add To Cart</p>
              <IoMdAdd />
            </div>
          </Button>
        </motion.div>
      </Table.Cell>
    </Table.Row>
  );
}
