interface ProductDetailsProps {
  productName: string;
  price: number;
}

export default function ProductDetails({
  productName,
  price,
}: ProductDetailsProps) {
  return (
    <div className="my-4 flex w-full flex-col gap-2 text-center md:my-0 md:text-left">
      <h6 className="text-lg font-bold">{productName}</h6>
      <span className="font-medium">${price}</span>
    </div>
  );
}
