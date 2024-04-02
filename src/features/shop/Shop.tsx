import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import Helmet from "@/components/UI/helmet/Helmet";
import ProductList from "@/components/UI/product/ProductList";
import { productCardProps } from "@/shared/types";
import { getProducts } from "@/store/service/productService";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { FadeLoader } from "react-spinners";

const Shop = () => {
  const [productsData, setProductData] = useState<productCardProps[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, allProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((allProducts) => {
        setProductData(allProducts);
      })
      .catch((error) => {
        throw new error();
      });
  }, [dispatch]);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value;
    if (selectedFilter === "sofa") {
      const fileredData = allProducts.filter(
        (item) => item.category === "sofa"
      );
      setProductData(fileredData);
    } else if (selectedFilter === "mobile") {
      const fileredData = allProducts.filter(
        (item) => item.category === "mobile"
      );
      setProductData(fileredData);
    } else if (selectedFilter === "chair") {
      const fileredData = allProducts.filter(
        (item) => item.category === "chair"
      );
      setProductData(fileredData);
    } else if (selectedFilter === "watch") {
      const fileredData = allProducts.filter(
        (item) => item.category === "watch"
      );
      setProductData(fileredData);
    } else if (selectedFilter === "wireless") {
      const fileredData = allProducts.filter(
        (item) => item.category === "wireless"
      );
      setProductData(fileredData);
    } else {
      setProductData(allProducts);
    }
  };

  const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    if (selectedSort === "ascending") {
      const sortedData = [...productsData].sort((a, b) => a.price - b.price);
      setProductData(sortedData);
    } else if (selectedSort === "descending") {
      const sortedData = [...productsData].sort((a, b) => b.price - a.price);
      setProductData(sortedData);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const filteredData = allProducts.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductData(filteredData);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

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

      <section className="pb-[60px] w-5/6 mx-auto">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[20px] w-full">
          {isLoading ? (
            <div className="flexCenter">
              <FadeLoader color="#36d7b7" />
            </div>
          ) : productsData.length === 0 ? (
            <div className="text-primary-color">No Products Are Found!</div>
          ) : (
            <ProductList items={productsData} />
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
