import Button from "./Button";

type emptyProps = {
  title: string;
};

export default function Empty({ title }: emptyProps) {
  return (
    <div className="flexCenter flex-col gap-3">
      <h2 className=" mx-auto w-full text-center text-2xl font-extrabold">
        {title}
      </h2>
      <div className="w-[150px]">
        <Button To="/shop" ArialLabel="Shopping Now">
          Shop
        </Button>
      </div>
    </div>
  );
}
