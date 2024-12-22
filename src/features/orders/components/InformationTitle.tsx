interface infoTitleProps {
  title: string;
  subTitle: string;
}

export default function InformationTitle({ title, subTitle }: infoTitleProps) {
  return (
    <div className="mb-[10px] flex w-full flex-wrap items-center gap-2 text-orange-color-light dark:text-orange-color">
      <h2 className="text-lg font-medium uppercase">{title}</h2>
      <span className="text-sm">{subTitle}</span>
    </div>
  );
}
