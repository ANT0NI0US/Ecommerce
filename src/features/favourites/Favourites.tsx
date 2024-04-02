import { useDispatch, useSelector } from "react-redux";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import Helmet from "@/components/UI/helmet/Helmet";
import { cartSliceState } from "@/shared/types";
import { cartActions } from "@/store/slice/cartSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { AppDispatch } from "@/store";

const Favourites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const perfectItems = useSelector(
    (state: cartSliceState) => state.cart.perfectItems
  );
  const addToCart = (item) => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product added successfully");
  };
  return (
    <Helmet title="Favourites">
      <CommonSection title="My Favourites" />
      <section className="w-full py-[60px]">
        {perfectItems.length === 0 ? (
          <h2 className="mt-2">No item Added To The Favourites</h2>
        ) : (
          <div className="w-5/6 mx-auto overflow-x-auto">
            <table className="w-full max-w-full space-y-6">
              <thead>
                <tr className="border-b">
                  <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
                    Image
                  </th>
                  <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
                    Title
                  </th>
                  <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
                    Price
                  </th>
                  <th className="py-1 text-center text-lg font-black text-primary-color capitalize tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {perfectItems.map((item, index) => (
                  <tr
                    className={`${
                      perfectItems.length - 1 === index ? "" : "border-b"
                    }`}
                    key={index}
                  >
                    <td className="min-w-[125px] min-h-[125px]  flexCenter text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                      <img
                        src={item.imgUrl}
                        alt={item.productName}
                        className="w-[80px] h-[80px] bg-cover"
                      />
                    </td>
                    <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                      {item.productName}
                    </td>
                    <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                      ${item.price}
                    </td>
                    <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                      <motion.div
                        onClick={() => addToCart(item)}
                        whileTap={{ scale: 1.2 }}
                        className=" bg-primary-color py-2 px-4 rounded-full flexCenter cursor-pointer text-white"
                      >
                        <IoMdAdd className="text-[1.2rem]" />
                        Add To Cart
                      </motion.div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default Favourites;
