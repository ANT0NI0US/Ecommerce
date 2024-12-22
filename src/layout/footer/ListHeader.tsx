interface headerProps {
  title: string;
}

export default function ListHeader({ title }: headerProps) {
  return (
    <h4 className="mb-2 text-xl font-extrabold uppercase tracking-wider text-orange-color-light dark:text-orange-color sm:mb-0">
      {title}
    </h4>
  );
}
