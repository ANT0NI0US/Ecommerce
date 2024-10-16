export default function SiteDescription() {
  return (
    <div className="col-span-2 flex flex-col items-center gap-[15px] sm:items-start">
      <div className="flexBetween gap-[3px] xs:gap-1">
        <img
          loading="lazy"
          className="max-h-full w-[45px] max-w-[45px]"
          src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
          alt="storeify-logo"
        />
        <h1 className="text-lg font-extrabold text-orange-color-light dark:text-orange-color">
          STOREIFY
        </h1>
      </div>
      <p className="text-center leading-[30px] xs:text-left">
        Explore a wide range of products, add to your cart, and enjoy a seamless
        shopping experience. Fast, secure checkout at your fingertips.
      </p>
    </div>
  );
}
