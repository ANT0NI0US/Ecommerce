interface commonSectionProps {
  title: string;
}

export default function CommonSection({ title }: commonSectionProps) {
  return (
    <section className="flexCenter h-screen bg-commonSection-pattern bg-cover bg-center bg-no-repeat pt-[80px] text-center">
      <h1 className="text-4xl font-semibold text-light-color">{title}</h1>
    </section>
  );
}
