import { ReactNode } from "react";

interface modalFormGridProps {
  children: ReactNode;
  columns?: string;
}

export default function ModalFormGrid({
  children,
  columns = "md:grid-cols-2",
}: modalFormGridProps) {
  return (
    <div className={`flex flex-col gap-[30px] md:grid ${columns}`}>
      {children}
    </div>
  );
}
