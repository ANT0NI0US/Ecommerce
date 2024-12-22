import { ReactNode } from "react";

interface modalFormGridProps {
  children: ReactNode;
  columns?: string;
}

export default function ModalFormGrid({
  children,
  columns = "sm:grid-cols-2",
}: modalFormGridProps) {
  return (
    <div
      className={`flex flex-col gap-[15px] sm:grid sm:gap-[20px] ${columns}`}
    >
      {children}
    </div>
  );
}
