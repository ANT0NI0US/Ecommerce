import CommonSection from "@/ui/CommonSection";
// import ShowOrder from "../components/ShowOrder";
import useHelmet from "@/hooks/useHelmet";
import AllOrders from "../components/AllOrders";

export default function Orders() {
  useHelmet("Orders");

  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [selectedOrderId, setSelectedOrderId] = useState<string>("");

  // const toggleModal = (orderId: string) => {
  //   setShowModal(!showModal);
  //   setSelectedOrderId(orderId);
  // };

  return (
    <>
      <CommonSection title="Orders" />
      {/* <ShowOrder
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        selectedOrderId={selectedOrderId}
      /> */}
      <section className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
        <div className="mx-auto w-[90%] space-y-6 md:w-5/6">
          <AllOrders />
        </div>
      </section>
    </>
  );
}
