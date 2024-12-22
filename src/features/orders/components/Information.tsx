interface infoProps {
  text?: string | number;
  value?: string;
}

export default function Information({ text, value }: infoProps) {
  return (
    <div className="flex flex-wrap gap-1 break-all rounded-md bg-secondary-color-light px-3 py-4 text-primary-color-light shadow-md dark:bg-secondary-color/50 dark:text-primary-color">
      {text && <p className="text-lg font-black">{text}: </p>}
      {value && <span>{value}</span>}
    </div>
  );
}
