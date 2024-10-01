const Year = new Date().getFullYear();

export default function CopyRight() {
  return (
    <div className="flexCenter border-t-[0.5px] border-orange-color-light py-[15px] text-center dark:border-orange-color">
      <p className="w-[90%] text-sm font-medium sm:w-5/6">
        Copyright © {Year} Storeify. All rights reserved.
      </p>
    </div>
  );
}
