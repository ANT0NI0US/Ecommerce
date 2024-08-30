// import { useDispatch } from "react-redux";
// import { motion } from "framer-motion";
// import { toast } from "react-toastify";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { RiDeleteBin5Line } from "react-icons/ri";

// import { AppDispatch } from "@/store";
// import { cartActions } from "@/store/slice/cartSlice";
// import { CartItem } from "@/shared/types";
// import Button from "@/ui/Button";

// interface selectedProductsProps {
//   allCartItems: CartItem[];
// }

// export default function SelectedProducts({
//   allCartItems,
// }: selectedProductsProps) {
//   const dispatch = useDispatch<AppDispatch>();
//   const handleDeleteItem = (id: string) => {
//     dispatch(cartActions.deleteItem(id));
//     toast.success("Product Has Been Deleted successfully");
//   };
//   return (
//     <div className="col-span-12 rounded-md border-[0.5px] border-secondary-color md:col-span-8">
//       {allCartItems.map((item, index) => (
//         <div
//           key={item.id}
//           className={`flexCenter relative flex-col p-5 sm:flex-row ${
//             index === allCartItems.length - 1
//               ? ""
//               : "border-b-[0.5px] border-b-secondary-color"
//           }`}
//         >
//           <div className="flexCenter mr-0 max-w-[200px] sm:mr-5">
//             <img
//               src={typeof item?.imgUrl === "string" ? item?.imgUrl : undefined}
//               alt={item?.productName}
//               className="max-w-full bg-cover"
//             />
//           </div>
//           <div className="flex w-full flex-1 flex-col gap-4">
//             <div className="flexBetween flex-col-reverse gap-3 text-center sm:flex-row">
//               <h6 className="font-medium">{item?.productName}</h6>
//               <motion.div
//                 onClick={() => item.id && handleDeleteItem(item?.id)}
//                 whileTap={{ scale: 1.1 }}
//                 className="absolute right-3 top-3 cursor-pointer"
//               >
//                 <RiDeleteBin5Line />
//               </motion.div>
//             </div>
//             <div className="flexBetween flex-col gap-3 sm:flex-row">
//               <span className="text-xl font-semibold text-primary-color">
//                 ${item.price}
//               </span>
//               <div className="flexBetween gap-5 rounded-md bg-secondary-color">
//                 {/* MINUS BUTTON */}
//                 <div className="w-[50px]">
//                   <Button
//                     variation="secondary"
//                     Font="h-[40px]"
//                     ArialLabel="minus Product"
//                     disabled={item.quantity === 1}
//                     onClick={() =>
//                       item.id &&
//                       dispatch(cartActions.MinimizeQuantityItem(item?.id))
//                     }
//                   >
//                     <div className="flexCenter p-1">
//                       <FaMinus />
//                     </div>
//                   </Button>
//                 </div>
//                 {/* NUMBER OF SELECTED PRODUCT */}
//                 <span className="text-2xl font-extrabold">{item.quantity}</span>
//                 {/* PLUS BUTTON */}
//                 <div className="w-[50px]">
//                   <Button
//                     variation="secondary"
//                     Font="h-[40px]"
//                     ArialLabel="Plus Product"
//                     onClick={() =>
//                       item.id &&
//                       dispatch(cartActions.MaximizeQuantityItem(item?.id))
//                     }
//                   >
//                     <div className="flexCenter p-1">
//                       <FaPlus />
//                     </div>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import { CartItem } from "@/shared/types";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SelectedProductItem from "./SelectedProductItem";

interface selectedProductsProps {
  allCartItems: CartItem[];
}

export default function SelectedProducts({
  allCartItems,
}: selectedProductsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteItem = (id: string, productName: string) => {
    dispatch(cartActions.deleteItem(id));
    toast.success(`${productName} Has Been Deleted successfully`);
  };

  const handleDecrease = (id: string) => {
    dispatch(cartActions.MinimizeQuantityItem(id));
  };

  const handleIncrease = (id: string) => {
    dispatch(cartActions.MaximizeQuantityItem(id));
  };

  return (
    <div className="col-span-12 rounded-md border-[0.5px] border-secondary-color md:col-span-8">
      {allCartItems?.map((item, index) => (
        <SelectedProductItem
          key={item.id}
          item={item}
          onDecrease={() => handleDecrease(item.id)}
          onIncrease={() => handleIncrease(item.id)}
          onDelete={() => handleDeleteItem(item.id, item.productName)}
          isLastItem={index === allCartItems.length - 1}
        />
      ))}
    </div>
  );
}
