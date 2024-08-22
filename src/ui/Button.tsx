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
  ${Font} transition-all h-[45px] font-bold
  ${(disabled || loading) && "cursor-not-allowed border-slate-400 bg-orange-400"}`;

  const styles: Record<typeof variation, string> = {
    primary:
      base +
      ` bg-primary-color font-bold text-white ${!disabled && !loading && "hover:bg-opacity-[0.8]"}`,
    secondary:
      base +
      ` bg-white font-bold text-primary-color
    ${!disabled && !loading && "hover:bg-primary-color hover:text-white"}`,
    delete:
      base +
      ` bg-[#2e7d32] text-white border-darkB 
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
          <div className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-white"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
