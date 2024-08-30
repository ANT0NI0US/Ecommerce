interface totalCostProps {
  totalQuantity: number;
  totalAmount: number;
}

export default function TotalCost({
  totalQuantity,
  totalAmount,
}: totalCostProps) {
  return (
    <div className="col-span-12 h-fit rounded-md border-[0.5px] border-secondary-color p-5 md:col-span-4">
      <div className="flex w-full flex-col gap-5">
        <h6 className="flexBetween w-full">
          Total Qty:
          <span>
            {totalQuantity === 1
              ? `${totalQuantity} Item`
              : `${totalQuantity} Items`}
          </span>
        </h6>
        <h6 className="flexBetween w-full">
          Subtotal: <span>${totalAmount}</span>
        </h6>
        <div className="flex w-full flex-col">
          <h6 className="flexBetween w-full">
            Shipping: <span>$0</span>
          </h6>
          <span className="ml-2 text-sm text-orange-color">Free Shipping</span>
        </div>

        <h4 className="flexBetween w-full border-t-[0.5px] border-secondary-color py-5 text-xl font-medium">
          Total Cost: <span>${totalAmount}</span>
        </h4>
      </div>
    </div>
  );
}
