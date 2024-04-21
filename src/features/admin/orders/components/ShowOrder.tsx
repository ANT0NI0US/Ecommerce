import { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { getOrderById } from "@/store/service/ordersService";
import { CartItem, orderState, ordersFireBase } from "@/shared/types";
import Loader from "@/components/UI/loader/Loader";

interface Props {
  showModal: boolean;
  closeModal: () => void;
  selectedOrderId: string;
}

interface orderDetailsProp {
  text: string;
  value: string;
}

const ShowOrder = ({ showModal, closeModal, selectedOrderId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, order } = useSelector((state: orderState) => state.order);

  useEffect(() => {
    if (selectedOrderId) {
      dispatch(getOrderById(selectedOrderId));
    }
  }, [dispatch, selectedOrderId]);

  const handleCloseModal = () => {
    closeModal();
  };

  const { userPhoto, items, name, phone, email, address, city, code, country } =
    order as ordersFireBase;

  const orderDetails: orderDetailsProp[] = [
    {
      text: "Name",
      value: name,
    },
    {
      text: "Phone",
      value: phone,
    },
    {
      text: "Email",
      value: email,
    },
    {
      text: "Address",
      value: address,
    },
    {
      text: "City",
      value: city,
    },
    {
      text: "Code",
      value: code,
    },
    {
      text: "Country",
      value: country,
    },
  ];

  return ReactDOM.createPortal(
    <Fragment>
      <div
        onClick={handleCloseModal}
        className={`fixed bottom-0 left-0 right-0 top-0 z-[90000] bg-black transition-all duration-[0.3s] ease-out ${
          showModal ? "visible opacity-55" : "invisible opacity-0"
        }`}
      ></div>

      <div
        className={`absolute left-1/2 top-1/2 z-[900000] h-[500px] max-h-[500px] w-[85%] -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto overflow-x-hidden rounded-md bg-white transition-all duration-[0.1s] ease-out sm:w-[60%] md:w-[50%]  ${
          showModal ? "visible" : "invisible"
        }`}
      >
        {isLoading ? (
          <Loader height="h-full" />
        ) : (
          <Fragment>
            <div
              onClick={handleCloseModal}
              className="flexCenter absolute right-2 top-1 h-8 w-8 cursor-pointer rounded-full bg-red-500 font-semibold text-white duration-[0.1s] hover:bg-red-600 hover:font-bold "
            >
              <span>x</span>
            </div>
            <div className="m-auto mt-4 h-20 w-20">
              <img src={userPhoto} alt="user-image" />
            </div>
            <div className="m-auto my-5 w-[90%]">
              <div>
                <h4 className="my-[10px] text-sm">Items</h4>
                <div className="flex flex-col gap-2">
                  {items?.map((item: CartItem) => (
                    <div
                      key={item.id}
                      className="text-lightB rounded-sm bg-[#EAF2F2] p-[10px]"
                    >
                      {item.quantity}
                      <span className="font-bold"> ({item.productName}) </span>
                      with {item.totalPrice}$
                    </div>
                  ))}
                </div>
              </div>
              {orderDetails.map((detail, index) => (
                <div key={index}>
                  <h4 className="my-[10px] text-sm">{detail.text}</h4>
                  <div className="text-lightB rounded-sm bg-[#EAF2F2] p-[10px]">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>,
    document.getElementById("modal") as HTMLElement,
  );
};

export default ShowOrder;
