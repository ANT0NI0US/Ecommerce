export default function Logo() {
  return (
    <div className="flexCenter gap-[3px] xs:gap-1">
      <img
        className="max-h-full w-[30px] max-w-[30px] xs:w-[45px] xs:max-w-[45px]"
        src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
        alt="storeify-logo"
      />
      <h1 className="text-sm font-extrabold text-primary-color xs:text-lg">
        STOREIFY
      </h1>
    </div>
  );
}
