interface ProductImageProps {
  imgUrl: string | File | null;
  productName: string;
}

export default function ProductImage({
  imgUrl,
  productName,
}: ProductImageProps) {
  return (
    <div className="w-[250px] md:w-[300px]">
      <img
        loading="lazy"
        src={typeof imgUrl === "string" ? imgUrl : undefined}
        alt={productName}
        className="object-contain object-center"
      />
    </div>
  );
}
