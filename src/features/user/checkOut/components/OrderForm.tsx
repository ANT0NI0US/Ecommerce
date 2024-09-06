import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import useAuth from "@/hooks/useAuth";
import {
  CartItem,
  newOrderProps,
  order,
  orderState,
  userProps,
  userState,
} from "@/shared/types";
import { AppDispatch } from "@/store";
import { getUserById, getUsers } from "@/store/service/userService";
import { addOrder } from "@/store/service/ordersService";
import { cartActions } from "@/store/slice/cartSlice";
import { isOnlySpaces } from "@/utils/helpers";
import Input from "@/ui/Input";
import Button from "@/ui/Button";

interface orderFormProps {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

interface CurrentUser {
  uid: string;
}

const initialState: order = {
  Name: "",
  Phone: "",
  Address: "",
  City: "",
  Code: "",
  Country: "",
};

export default function OrderForm({
  cartItems,
  totalQuantity,
  totalAmount,
}: orderFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const currentUser = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const { uid } = currentUser as CurrentUser;

  const { user } = useSelector((state: userState) => state.user);
  const { isLoading: isOrderLoading } = useSelector(
    (state: orderState) => state.order,
  );

  const addNewOrder = (data: order) => {
    const { uid, email, photoURL } = user as userProps;
    const orderObj = {
      ...data,
      uid,
      email,
      photoURL,
      cartItems,
      totalQuantity: totalQuantity,
      totalAmount: totalAmount,
    } as newOrderProps;
    dispatch(addOrder(orderObj))
      .unwrap()
      .then(() => {
        dispatch(cartActions.resetCartItemsAndTotal());
        toast.success("order has been submitted");
        reset();
        navigate("/home");
      })
      .catch(() => {
        toast.error("something went wrong");
      });
  };

  useEffect(() => {
    dispatch(getUsers())
      .unwrap()
      .then(() => {
        dispatch(getUserById(uid));
      });
  }, [dispatch, uid]);

  return (
    <div className="col-span-12 rounded-md border-[0.5px] border-card-bg-01-light p-5 dark:border-secondary-color md:col-span-8">
      <h3 className="mb-5 text-center text-lg font-bold md:text-left">
        Billing Information
      </h3>
      <form onSubmit={handleSubmit(addNewOrder)} className="space-y-2">
        <Input
          placeholder="Name"
          disabled={isOrderLoading}
          error={errors?.Name?.message}
          {...register("Name", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />
        <Input
          placeholder="Phone Number"
          //   disabled={isLoading}
          error={errors?.Phone?.message}
          {...register("Phone", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />
        <Input
          placeholder="Street Address"
          disabled={isOrderLoading}
          error={errors?.Address?.message}
          {...register("Address", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />
        <Input
          placeholder="City"
          disabled={isOrderLoading}
          error={errors?.City?.message}
          {...register("City", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />
        <Input
          placeholder="Potal Code"
          disabled={isOrderLoading}
          error={errors?.Code?.message}
          {...register("Code", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />
        <Input
          placeholder="Country"
          disabled={isOrderLoading}
          error={errors?.Country?.message}
          {...register("Country", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />
        <motion.div whileTap={{ scale: 1.1 }} className="!mt-10 w-full">
          <Button
            ArialLabel="place-an-order"
            type="submit"
            loading={isOrderLoading}
          >
            Place an Order
          </Button>
        </motion.div>
      </form>
    </div>
  );
}
