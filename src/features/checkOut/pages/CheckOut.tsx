import CommonSection from "@/components/UI/commonSection/CommonSection";
import Helmet from "@/components/UI/helmet/Helmet";
import { cartSliceState, order, userState } from "@/shared/types";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { AppDispatch } from "@/store";
import { getUserById, getUsers } from "@/store/service/userService";
import { addOrder } from "@/store/service/ordersService";
import { toast } from "react-toastify";
import { cartActions } from "@/store/slice/cartSlice";
import { useNavigate } from "react-router-dom";

const initialState: order = {
  Name: "",
  Phone: "",
  Address: "",
  City: "",
  Code: "",
  Country: "",
};

const CheckOut = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const currentUser = useAuth();

  const { totalQuantity, totalAmount, cartItems } = useSelector(
    (state: cartSliceState) => state.cart,
  );
  const { user } = useSelector((state: userState) => state.user);

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getUsers())
      .unwrap()
      .then(() => {
        dispatch(getUserById(currentUser?.uid));
      });
  }, [currentUser.uid, dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { uid, email, photoURL } = user;
    const orderObj = {
      ...state,
      uid,
      email,
      photoURL,
      cartItems,
      totalQuantity: totalQuantity,
      totalAmount: totalAmount,
    };
    dispatch(addOrder(orderObj))
      .unwrap()
      .then(() => {
        dispatch(cartActions.resetCartItemsAndTotal());
        setState(initialState);
        toast.success("order has been submitted");
        navigate("/home");
      })
      .catch(() => {
        toast.error("something went wrong");
      });
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="w-full py-[60px]">
        <div className="mx-auto grid w-5/6 grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-12 overflow-x-auto md:col-span-8">
            <h3 className="mb-5 text-center text-[1.2rem] font-bold text-primary-color sm:text-left">
              Billing Information
            </h3>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <input
                className="input_checkout"
                type="text"
                name="Name"
                value={state.Name}
                required
                onChange={inputHandle}
                placeholder="Enter Your Name"
              />
              <input
                className="input_checkout"
                type="number"
                name="Phone"
                value={state.Phone}
                required
                onChange={inputHandle}
                placeholder="Enter Your Phone Number"
              />
              <input
                className="input_checkout"
                type="text"
                name="Address"
                value={state.Address}
                required
                onChange={inputHandle}
                placeholder="Enter your Street Address"
              />
              <input
                className="input_checkout"
                type="text"
                name="City"
                value={state.City}
                required
                onChange={inputHandle}
                placeholder="Enter your City"
              />
              <input
                className="input_checkout"
                type="text"
                name="Code"
                value={state.Code}
                required
                onChange={inputHandle}
                placeholder="Enter your Potal Code"
              />
              <input
                className="input_checkout"
                type="text"
                name="Country"
                value={state.Country}
                required
                onChange={inputHandle}
                placeholder="Enter your Country"
              />
              <div className="w-full">
                <motion.button
                  aria-label="place-an-order"
                  className="btn btn-banner"
                  whileTap={{ scale: 1.1 }}
                  type="submit"
                >
                  Place an Order
                </motion.button>
              </div>
            </form>
          </div>
          <div className="col-span-12 h-fit rounded-md bg-primary-color p-5 text-white  md:col-span-4">
            <div className="flex w-full flex-col items-start justify-start gap-5 text-center">
              <h6 className="flexBetween w-full">
                Total Qty:{" "}
                <span>
                  {totalQuantity === 1
                    ? `${totalQuantity} Item`
                    : `${totalQuantity} Items`}
                </span>
              </h6>
              <h6 className="flexBetween w-full">
                Subtotal: <span>${totalAmount}</span>
              </h6>
              <div className="flex w-full flex-col items-start">
                <h6 className="flexBetween w-full">
                  Shipping: <span>$0</span>
                </h6>
                <span className="ml-2 text-xs text-small-text-color">
                  Free Shipping
                </span>
              </div>

              <h4 className="flexBetween w-full border-t-[1px] border-small-text-color py-5 text-xl font-medium">
                Total Cost: <span>${totalAmount}</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CheckOut;
