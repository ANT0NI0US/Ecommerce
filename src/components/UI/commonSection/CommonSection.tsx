interface commonSectionProps {
  title: string;
}

const CommonSection = ({ title }: commonSectionProps) => {
  return (
    <section className="bg-commonSection-pattern mt-[69px] bg-no-repeat bg-center bg-cover flexCenter text-center h-[300px]">
      <h1 className="text-white font-[600] text-3xl">{title}</h1>
    </section>
  );
};

export default CommonSection;
