import { useState, useEffect } from "react";
import { MultiValue, SingleValue } from "react-select";
import { IoIosSearch } from "react-icons/io";
import Choose from "@/ui/Choose";
import Input from "@/ui/Input";
import GridContainer from "@/ui/GridContainer";
import { newProductProps } from "@/utils/types";

const categories = ["Sofa", "Mobile", "Chair", "Watch", "Wireless"];
const sorts = ["Ascending", "Descending"];

interface filteredProductsProps {
  handleChangingProduct: (newProductData: newProductProps[]) => void;
  allProducts: newProductProps[];
  productsData: newProductProps[];
}

interface Option {
  value: string;
  label: string;
}

export default function FilterProducts({
  allProducts,
  handleChangingProduct,
}: filteredProductsProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFilter = (
    selectedOptions:
      | MultiValue<Option>
      | readonly Option[]
      | SingleValue<Option>
      | null,
  ) => {
    if (Array.isArray(selectedOptions)) {
      const selectedValues = selectedOptions.map((option) => option.value);
      setSelectedCategories(selectedValues);
    } else {
      setSelectedCategories([]);
    }
  };

  const handleSortBy = (
    selectedOptions:
      | MultiValue<Option>
      | readonly Option[]
      | SingleValue<Option>
      | null,
  ) => {
    if (selectedOptions && "value" in selectedOptions) {
      setSortOption(selectedOptions.value);
    } else {
      setSortOption(null);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    let filteredProducts = [...allProducts];

    // Filter by category
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category.toLowerCase()),
      );
    }

    // Filter by search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Sort the products
    if (sortOption) {
      if (sortOption === "ascending") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "descending") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }
    }

    // Update the displayed products
    handleChangingProduct(filteredProducts);
  }, [
    selectedCategories,
    sortOption,
    searchTerm,
    allProducts,
    handleChangingProduct,
  ]);

  return (
    <section className="mx-auto w-[90%] py-[80px] sm:w-5/6">
      <GridContainer>
        <Choose
          name="FilterByCategory"
          placeholder="Filter by Category"
          data={categories?.map((category) => ({
            value: category.toLowerCase(),
            label: category,
          }))}
          onChange={handleFilter}
          isClearable={true}
          isMulti={true}
          zindex={10}
        />
        <Choose
          name="SortBy"
          placeholder="Sort By"
          data={sorts?.map((sort) => ({
            value: sort.toLowerCase(),
            label: sort,
          }))}
          onChange={handleSortBy}
          isClearable={true}
          zindex={9}
        />
        <Input
          showLabel={false}
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search...."
          Icon={<IoIosSearch />}
        />
      </GridContainer>
    </section>
  );
}
