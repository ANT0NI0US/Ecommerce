import CommonSection from "@/ui/CommonSection";
import useHelmet from "@/hooks/useHelmet";
import AllOrders from "../components/AllOrders";

export default function Orders() {
  useHelmet("Orders");

  return (
    <>
      <CommonSection title="Orders" />

      <section className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
        <div className="mx-auto w-[90%] space-y-6 md:w-5/6">
          <AllOrders />
        </div>
      </section>
    </>
  );
}
