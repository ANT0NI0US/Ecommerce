import { productCardProps } from "@/shared/types";
import { IoIosSearch } from "react-icons/io";

interface filteredProductsProps {
  handleChangingProduct: (newProductData: productCardProps[]) => void;
  allProducts: productCardProps[];
  productsData: productCardProps[];
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
        (product: productCardProps) => product.category === "sofa"
      );
      handleChangingProduct(fileredData);
    } else if (selectedFilter === "mobile") {
      const fileredData = allProducts.filter(
        (product: productCardProps) => product.category === "mobile"
      );
      handleChangingProduct(fileredData);
    } else if (selectedFilter === "chair") {
      const fileredData = allProducts.filter(
        (product: productCardProps) => product.category === "chair"
      );
      handleChangingProduct(fileredData);
    } else if (selectedFilter === "watch") {
      const fileredData = allProducts.filter(
        (product: productCardProps) => product.category === "watch"
      );
      handleChangingProduct(fileredData);
    } else if (selectedFilter === "wireless") {
      const fileredData = allProducts.filter(
        (product: productCardProps) => product.category === "wireless"
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
    const filteredData = allProducts.filter((product: productCardProps) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    handleChangingProduct(filteredData);
  };
  return (
    <section className="py-[60px] w-5/6 mx-auto">
      <div className="w-full grid grid-cols-12 gap-4 sm:gap-8">
        <div className="col-span-12 sm:col-span-4 md:col-span-3">
          <select
            onChange={handleFilter}
            className="border border-primary-color px-5 py-2 cursor-pointer bg-primary-color text-white rounded-[8px] text-[0.9rem]"
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
            className="border border-primary-color px-5 py-2 cursor-pointer bg-primary-color text-white rounded-[8px] text-[0.9rem]"
          >
            <option>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-4 md:col-span-6 flexBetween border border-primary-color rounded-[8px] cursor-pointer pr-3">
          <input
            onChange={handleSearch}
            className="w-full outline-0 py-1 ml-2"
            type="text"
            placeholder="Search...."
          />
          <IoIosSearch className="text-primary-color w-[10%]" />
        </div>
      </div>
    </section>
  );
};

export default FilterProducts;
