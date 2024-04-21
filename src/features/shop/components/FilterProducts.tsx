import { newProductProps } from "@/shared/types";
import { IoIosSearch } from "react-icons/io";

interface filteredProductsProps {
  handleChangingProduct: (newProductData: newProductProps[]) => void;
  allProducts: newProductProps[];
  productsData: newProductProps[];
}

const FilterProducts = ({
  allProducts,
  productsData,
  handleChangingProduct,
}: filteredProductsProps) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value;
    if (selectedFilter === "sofa") {
      const fileredData = allProducts.filter(
        (product: newProductProps) => product.category === "sofa",
      );
      handleChangingProduct(fileredData);
    } else if (selectedFilter === "mobile") {
      const fileredData = allProducts.filter(
        (product: newProductProps) => product.category === "mobile",
      );
      handleChangingProduct(fileredData);
    } else if (selectedFilter === "chair") {
      const fileredData = allProducts.filter(
        (product: newProductProps) => product.category === "chair",
      );
      handleChangingProduct(fileredData);
    } else if (selectedFilter === "watch") {
      const fileredData = allProducts.filter(
        (product: newProductProps) => product.category === "watch",
      );
      handleChangingProduct(fileredData);
    } else if (selectedFilter === "wireless") {
      const fileredData = allProducts.filter(
        (product: newProductProps) => product.category === "wireless",
      );
      handleChangingProduct(fileredData);
    } else {
      handleChangingProduct(allProducts);
    }
  };

  const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    if (selectedSort === "ascending") {
      const sortedData = [...productsData].sort((a, b) => a.price - b.price);
      handleChangingProduct(sortedData);
    } else if (selectedSort === "descending") {
      const sortedData = [...productsData].sort((a, b) => b.price - a.price);
      handleChangingProduct(sortedData);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const filteredData = allProducts.filter((product: newProductProps) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    handleChangingProduct(filteredData);
  };
  return (
    <section className="mx-auto w-5/6 py-[60px]">
      <div className="grid w-full grid-cols-12 gap-4 sm:gap-8">
        <div className="col-span-12 sm:col-span-4 md:col-span-3">
          <select
            onChange={handleFilter}
            className="cursor-pointer rounded-[8px] border border-primary-color bg-primary-color px-5 py-2 text-[0.9rem] text-white"
          >
            <option>Filter by Category</option>
            <option value="sofa">Sofa</option>
            <option value="mobile">Mobile</option>
            <option value="chair">Chair</option>
            <option value="watch">Watch</option>
            <option value="wireless">Wireless</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-4 md:col-span-3">
          <select
            onChange={handleSortBy}
            className="cursor-pointer rounded-[8px] border border-primary-color bg-primary-color px-5 py-2 text-[0.9rem] text-white"
          >
            <option>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="flexBetween col-span-12 cursor-pointer rounded-[8px] border border-primary-color pr-3 sm:col-span-4 md:col-span-6">
          <input
            onChange={handleSearch}
            className="ml-2 w-full py-1 outline-0"
            type="text"
            placeholder="Search...."
          />
          <IoIosSearch className="w-[10%] text-primary-color" />
        </div>
      </div>
    </section>
  );
};

export default FilterProducts;
