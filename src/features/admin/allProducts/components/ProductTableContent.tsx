import DeleteProduct from "./DeleteProduct";
import { newProductProps } from "@/utils/types";
import Table from "@/ui/Table";

interface Props {
  product: newProductProps;
}

export default function ProductTableContent({ product }: Props) {
  return (
    <Table.Row key={product?.id}>
      <Table.Cell>
        <div className="flexCenter">
          <img
            src={
              typeof product?.imgUrl === "string" ? product.imgUrl : undefined
            }
            alt={product?.productName}
            className="h-16 max-h-full w-16 max-w-full 
             object-contain object-center sm:h-24 sm:w-24 lg:h-32 lg:w-32"
          />
        </div>
      </Table.Cell>
      <Table.Cell>{product?.productName}</Table.Cell>
      <Table.Cell>{product?.category}</Table.Cell>
      <Table.Cell>${product?.price}</Table.Cell>
      <Table.Cell>
        <DeleteProduct product={product} />
      </Table.Cell>
    </Table.Row>
  );
}
