// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { toast } from "react-toastify";
// import CommonSection from "@/components/UI/commonSection/CommonSection";
// import Helmet from "@/components/UI/helmet/Helmet";
// import { cartActions } from "@/store/slice/cartSlice";
// import { cartSliceState } from "@/shared/types";

// const Cart = () => {
//   const allCartItems = useSelector(
//     (state: cartSliceState) => state.cart.cartItems
//   );
//   const totalAmount = useSelector(
//     (state: cartSliceState) => state.cart.totalAmount
//   );
//   const dispatch = useDispatch();
//   const handleDeleteItem = (id: string) => {
//     dispatch(cartActions.deleteItem(id));
//     toast.success("Product deleted successfully");
//   };
//   return (
//     <Helmet title="Cart">
//       <CommonSection title="Shopping Cart" />
//       <section className="w-full py-[60px]">
//         {allCartItems.length === 0 ? (
//           <h2 className="mt-2">No item Added To The Cart</h2>
//         ) : (
//           <div className="w-5/6 mx-auto grid grid-cols-12 gap-4 sm:gap-8">
//             <div className="col-span-12 md:col-span-9 overflow-x-auto">
//               <table className="w-full max-w-full space-y-6">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
//                       Image
//                     </th>
//                     <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
//                       Title
//                     </th>
//                     <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
//                       Price
//                     </th>
//                     <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
//                       Qty
//                     </th>
//                     <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
//                       Delete
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {allCartItems.map((item, index) => (
//                     <tr
//                       className={`${
//                         allCartItems.length - 1 === index ? "" : "border-b"
//                       }`}
//                       key={index}
//                     >
//                       <td className="min-w-[125px] min-h-[125px]  flexCenter text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
//                         <img
//                           src={item.imgUrl}
//                           alt={item.productName}
//                           className="w-[80px] h-[80px] bg-cover"
//                         />
//                       </td>
//                       <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
//                         {item.productName}
//                       </td>
//                       <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
//                         ${item.price}
//                       </td>
//                       <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
//                         {item.quantity}px
//                       </td>
//                       <motion.td
//                         onClick={() => handleDeleteItem(item.id)}
//                         whileTap={{ scale: 1.1 }}
//                         className="relative cursor-pointer text-center text-primary-color whitespace-nowrap px-6 py-4"
//                       >
//                         <RiDeleteBin5Line className="w-[20px] h-[20px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
//                       </motion.td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="flexCenter flex-col sm:justify-start sm:items-start col-span-12 md:col-span-3">
//               <div className="flexCenter gap-5 md:block w-full">
//                 <h6 className="font-medium">Subtotal</h6>
//                 <span className="text-xl font-semibold text-primary-color">
//                   ${totalAmount}
//                 </span>
//               </div>
//               <p className="text-center md:text-left mt-2 text-sm w-full">
//                 taxes and shipping will calculate in checkout
//               </p>
//               <div className="flexCenter flex-col gap-5 md:items-start md:gap-0 w-full">
//                 <motion.button
//                   aria-label="Go-To-Shop"
//                   whileTap={{ scale: 1.1 }}
//                 >
//                   <Link
//                     className="btn btn-banner mt-7 md:mt-11 block w-fit"
//                     to="/shop"
//                   >
//                     Continue Shopping
//                   </Link>
//                 </motion.button>
//                 <motion.button
//                   aria-label="Go-To-Shop"
//                   whileTap={{ scale: 1.1 }}
//                 >
//                   <Link
//                     className="btn btn-banner mt-3 md:mt-9 block w-fit"
//                     to="/checkout"
//                   >
//                     Checkout
//                   </Link>
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </Helmet>
//   );
// };

// export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import Helmet from "@/components/UI/helmet/Helmet";
import { cartActions } from "@/store/slice/cartSlice";
import { cartSliceState } from "@/shared/types";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { AppDispatch } from "@/store";

const Cart = () => {
  const allCartItems = useSelector(
    (state: cartSliceState) => state.cart.cartItems
  );
  const totalAmount = useSelector(
    (state: cartSliceState) => state.cart.totalAmount
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteItem = (id: string) => {
    dispatch(cartActions.deleteItem(id));
    toast.success("Product Has Been Deleted successfully");
  };
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section className="w-full py-[60px]">
        {allCartItems.length === 0 ? (
          <h2 className="mt-2">No items Added To The Cart</h2>
        ) : (
          <div className="w-5/6 mx-auto grid grid-cols-12 gap-4 sm:gap-8">
            <div className="col-span-12 md:col-span-8 border rounded-md p-4">
              {allCartItems.map((item, index) => (
                <div
                  key={item.index}
                  className={`relative flexCenter flex-col sm:flex-row py-5 ${
                    index === allCartItems.length - 1 ? "" : "border-b"
                  }`}
                >
                  <div className="max-w-[200px] mr-0 sm:mr-5 flexCenter">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="max-w-full bg-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-4 w-full">
                    <div className="flexBetween gap-3 flex-col-reverse sm:flex-row text-center">
                      <h6 className="font-medium">{item.productName}</h6>
                      <motion.div
                        onClick={() => handleDeleteItem(item.id)}
                        whileTap={{ scale: 1.1 }}
                        className="absolute top-1 right-0 sm:relative sm:top-0 cursor-pointer text-center text-primary-color whitespace-nowrap  p-5"
                      >
                        <RiDeleteBin5Line className="w-[20px] h-[20px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
                      </motion.div>
                    </div>
                    <div className="flexBetween gap-3 flex-col sm:flex-row">
                      <span className="text-xl font-semibold text-primary-color">
                        ${item.price}
                      </span>
                      <div className="bg-card-bg-01 py-2 px-4 rounded-xl flexBetween gap-5 text-primary-color font-bold">
                        <button
                          disabled={item.quantity === 1}
                          onClick={() =>
                            dispatch(cartActions.MinimizeQuantityItem(item.id))
                          }
                          className="disabled:text-gray-400"
                        >
                          <FaMinus className="w-3 h-3" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(cartActions.MaximizeQuantityItem(item.id))
                          }
                        >
                          <FaPlus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flexCenter flex-col sm:justify-start sm:items-start col-span-12 md:col-span-4 border rounded-md p-3 h-fit">
              <div className="flexCenter gap-5 md:block w-full">
                <h6 className="font-medium">Subtotal</h6>
                <span className="text-xl font-semibold text-primary-color">
                  ${totalAmount}
                </span>
              </div>
              <p className="text-center md:text-left mt-2 text-sm w-full">
                taxes and shipping will calculate in checkout
              </p>
              <div className="flexCenter flex-col gap-5 md:items-start md:gap-0 w-full">
                <motion.button
                  aria-label="Go-To-Shop"
                  whileTap={{ scale: 1.1 }}
                >
                  <Link
                    className="btn btn-banner mt-7 md:mt-11 block w-fit"
                    to="/shop"
                  >
                    Continue Shopping
                  </Link>
                </motion.button>
                <motion.button
                  aria-label="Go-To-Shop"
                  whileTap={{ scale: 1.1 }}
                >
                  <Link
                    className="btn btn-banner mt-3 md:mt-9 block w-fit"
                    to="/checkout"
                  >
                    Checkout
                  </Link>
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default Cart;
