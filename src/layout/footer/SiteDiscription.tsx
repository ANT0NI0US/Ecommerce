export default function SiteDiscription() {
  return (
    <div className="col-span-2 flex flex-col items-center gap-[15px] sm:items-start">
      <div className="flexBetween gap-[3px] xs:gap-1">
        <img
          className="max-h-full w-[45px] max-w-[45px]"
          src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
          alt="storeify-logo"
        />
        <h1 className="text-orange-color text-lg font-extrabold">STOREIFY</h1>
      </div>
      <p className="text-center leading-[30px] xs:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        perspiciatis vel laborum dolorum repellat ex illum earum dignissimos
        architecto. Voluptates.
      </p>
    </div>
  );
}
