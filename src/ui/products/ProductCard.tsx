import { useEffect, useState } from "react";
import AddFavoriteProduct from "./AddFavoriteProduct";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import { newProductProps } from "@/utils/types";

export default function ProductCard({
  item,
  BorderColor,
}: {
  item: newProductProps;
  BorderColor?: string;
}) {
  const [finalBorderColor, setFinalBorderColor] = useState(
    BorderColor || "#daf3ff",
  );

  useEffect(() => {
    const handleThemeChange = () => {
      const defaultBorderColor = document.body.classList.contains("dark")
        ? "#daf3ff"
        : "#f39530";
      setFinalBorderColor(BorderColor || defaultBorderColor);
    };

    // Check the theme initially
    handleThemeChange();

    // Listen for changes in the theme
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [BorderColor]);

  const { imgUrl, productName } = item;
  return (
    <div
      className="flexBetween group relative flex-col rounded-md border-[0.5px] shadow-md drop-shadow-2xl transition-all duration-500 hover:!border-primary-color-light  hover:!shadow-2xl hover:!shadow-primary-color-light dark:hover:!border-primary-color dark:hover:!shadow-primary-color"
      style={{
        borderColor: finalBorderColor,
        boxShadow: `0 0 10px ${finalBorderColor}`,
      }}
    >
      {/* ADD TO FAVORITES */}
      <AddFavoriteProduct item={item} />
      {/* PRODUCT IMAGE */}
      <ProductImage imgUrl={imgUrl} productName={productName} />
      {/* PRODUCT CONTENT */}
      <ProductContent item={item} BorderColor={finalBorderColor} />
    </div>
  );
}
