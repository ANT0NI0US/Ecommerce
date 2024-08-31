import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variation?: "primary" | "secondary" | "delete";
  Font?: string;
  disabled?: boolean;
  loading?: boolean;
  ArialLabel: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  Font,
  disabled,
  loading,
  ArialLabel,
}: ButtonProps) {
  const base = `focus:outline-none w-full rounded-md border relative 
   transition-all h-[45px] font-bold ${Font}
  ${(disabled || loading) && "cursor-not-allowed border-main-color bg-light-color/30 !text-main-color dark:border-light-color dark:bg-main-color/30 dark:!text-light-color"}`;

  const styles: Record<typeof variation, string> = {
    primary:
      base +
      ` bg-secondary-color-light text-orange-color-light border-orange-color-light 
      dark:bg-secondary-color dark:text-orange-color dark:border-orange-color 
      ${!disabled && !loading && "hover:bg-opacity-[0.5] dark:hover:bg-opacity-[0.8]"}`,
    secondary:
      base +
      ` bg-light-color/55 text-primary-color-light border-primary-color-light
        dark:bg-main-color/55  dark:text-primary-color dark:border-primary-color
    ${!disabled && !loading && "hover:bg-secondary-color-light hover:text-orange-color-light hover:border-orange-color-light dark:hover:bg-secondary-color dark:hover:text-orange-color dark:hover:border-orange-color"}`,
    delete:
      base +
      ` bg-[#2e7d32] text-light-color border-darkB 
      ${!disabled && !loading && "hover:bg-[#1b5e20]"}`,
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={styles[variation]}
      aria-label={ArialLabel}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="h-3 w-3 animate-bounce rounded-full bg-light-color [animation-delay:-0.3s] dark:bg-main-color"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-light-color [animation-delay:-0.15s] dark:bg-main-color"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-light-color dark:bg-main-color"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
