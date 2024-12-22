import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  MdDriveFileRenameOutline,
  MdOutlineMailOutline,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { LiaCitySolid } from "react-icons/lia";
import { IoQrCodeOutline } from "react-icons/io5";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import {
  CartItem,
  newOrderProps,
  order,
  orderState,
  userProps,
  userState,
} from "@/utils/types";
import { isOnlySpaces } from "@/utils/helpers";
import {
  EMAIL_REGEX,
  MAX_INPUT_LENGTH,
  MAX_TEXTAREA_LENGTH,
  MIN_INPUT_LENGTH,
  PHONE_NUMBER_REGEX,
  PORTAL_CODE,
} from "@/utils/constants";
import { AppDispatch } from "@/store";
import { getUserById } from "@/store/service/userService";
import { addOrder } from "@/store/service/ordersService";
import { cartActions } from "@/store/slice/cartSlice";
import useAuth from "@/hooks/useAuth";

interface orderFormProps {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
  orderDate: string;
  deliveryDate: string;
}

interface CurrentUser {
  uid: string;
}

const initialState: order = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  code: "",
  country: "",
};

export default function OrderForm({
  cartItems,
  totalQuantity,
  totalAmount,
  orderDate,
  deliveryDate,
}: orderFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const currentUser = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<order>({
    mode: "onChange",
  });

  const { uid } = currentUser as CurrentUser;

  const { user } = useSelector((state: userState) => state.user);
  const { isLoading: isOrderLoading } = useSelector(
    (state: orderState) => state.order,
  );

  const addNewOrder: SubmitHandler<order> = (data) => {
    const { uid, photoURL } = user as userProps;
    const orderObj = {
      ...data,
      uid,
      photoURL,
      cartItems,
      totalQuantity,
      totalAmount,
      orderDate,
      deliveryDate,
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
    if (uid) {
      dispatch(getUserById(uid))
        .unwrap()
        .then((data) => {
          reset({ ...initialState, email: data.email, name: data.displayName });
        });
    }
  }, [dispatch, reset, uid]);

  return (
    <div className="col-span-12 rounded-md border-[0.5px] border-card-bg-01-light p-5 dark:border-secondary-color md:col-span-8">
      <h3 className="mb-5 text-center text-lg font-bold md:text-left">
        Billing Information
      </h3>
      <form onSubmit={handleSubmit(addNewOrder)} className="space-y-2">
        <Input
          label="Name"
          placeholder="Name"
          disabled={isOrderLoading}
          register={register("name", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: MIN_INPUT_LENGTH,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: MAX_INPUT_LENGTH,
              message: "Must be at most 50 characters long",
            },
          })}
          error={errors?.name?.message}
          Icon={<MdDriveFileRenameOutline />}
        />

        <Input
          label="Email"
          placeholder="Email"
          disabled={isOrderLoading}
          register={register("email", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            pattern: {
              value: EMAIL_REGEX,
              message: "Enter a valid email.",
            },
          })}
          error={errors?.email?.message}
          Icon={<MdOutlineMailOutline />}
        />

        <Input
          label="Phone Number"
          placeholder="Phone Number"
          disabled={isOrderLoading}
          register={register("phone", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            pattern: {
              value: PHONE_NUMBER_REGEX,
              message: "Enter a valid mobile phone number.",
            },
          })}
          error={errors?.phone?.message}
          Icon={<AiOutlinePhone />}
        />

        <Input
          label="Street Address"
          placeholder="Street Address"
          disabled={isOrderLoading}
          register={register("address", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: MIN_INPUT_LENGTH,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: MAX_TEXTAREA_LENGTH,
              message: "Must be at most 250 characters long",
            },
          })}
          error={errors?.address?.message}
          Icon={<FaRegAddressBook />}
        />

        <Input
          label="City"
          placeholder="City"
          disabled={isOrderLoading}
          register={register("city", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: MIN_INPUT_LENGTH,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: MAX_INPUT_LENGTH,
              message: "Must be at most 50 characters long",
            },
          })}
          error={errors?.city?.message}
          Icon={<LiaCitySolid />}
        />

        <Input
          label="Portal Code"
          placeholder="Portal Code"
          disabled={isOrderLoading}
          register={register("code", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            pattern: {
              value: PORTAL_CODE,
              message:
                "Invalid Portal Code. Must be 6-10 alphanumeric characters.",
            },
          })}
          error={errors?.code?.message}
          Icon={<IoQrCodeOutline />}
        />

        <Input
          label="Country"
          placeholder="Country"
          disabled={isOrderLoading}
          register={register("country", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: MIN_INPUT_LENGTH,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: MAX_INPUT_LENGTH,
              message: "Must be at most 50 characters long",
            },
          })}
          error={errors?.country?.message}
          Icon={<MdOutlineMapsHomeWork />}
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
