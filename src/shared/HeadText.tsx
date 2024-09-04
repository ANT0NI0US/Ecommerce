interface Props {
  children: React.ReactNode;
}

export default function HeadText({ children }: Props) {
  return (
    // <div className="mb-10 text-center text-3xl font-bold text-primary-color-light dark:text-primary-color">
    //   {children}
    // </div>
    <h2 className="mb-10 flex flex-row flex-nowrap items-center">
      <span className="block flex-grow border-t border-primary-color-light dark:border-primary-color"></span>
      <span className="mx-4 block flex-none rounded bg-primary-color-light px-4 py-2.5 text-xl font-medium leading-none text-light-color dark:bg-primary-color dark:text-main-color">
        {children}
      </span>
      <span className="block flex-grow border-t border-primary-color-light dark:border-primary-color"></span>
    </h2>
  );
}
