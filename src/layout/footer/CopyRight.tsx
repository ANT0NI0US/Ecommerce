const Year = new Date().getFullYear();

export default function CopyRight() {
  return (
    <div className="flexCenter border-light-color border-t-[1px] py-[15px] text-center">
      <p className="w-[90%] text-sm font-medium sm:w-5/6">
        Copyright © {Year} Storeify. All rights reserved.
      </p>
    </div>
  );
}

CopyRight;
