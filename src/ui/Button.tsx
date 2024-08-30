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
  ${(disabled || loading) && "cursor-not-allowed border-light-color bg-main-color/30 !text-light-color"}`;

  const styles: Record<typeof variation, string> = {
    primary:
      base +
      ` bg-secondary-color font-bold text-orange-color border-orange-color ${!disabled && !loading && "hover:bg-opacity-[0.8]"}`,
    secondary:
      base +
      ` bg-main-color/55 font-bold text-primary-color border-primary-color
    ${!disabled && !loading && "hover:bg-secondary-color hover:text-orange-color hover:border-orange-color"}`,
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
          <div className="h-3 w-3 animate-bounce rounded-full bg-light-color [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-light-color [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-light-color"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
