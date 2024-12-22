interface LabelProps {
  htmlFor?: string;
  text?: string;
}

export function Label({ htmlFor, text }: LabelProps) {
  if (!text) return null;
  return (
    <label
      htmlFor={htmlFor}
      className="block p-[3px] text-sm font-extrabold uppercase tracking-wider text-main-color dark:text-light-color"
    >
      {text}
    </label>
  );
}
