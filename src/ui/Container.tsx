import { ReactNode } from "react";

interface containerProps {
  children: ReactNode;
  Styles?: string;
}

export default function Container({ children, Styles = "" }: containerProps) {
  return (
    <div className={`mx-auto h-full w-[90%] max-w-[1400px] md:w-5/6 ${Styles}`}>
      {children}
    </div>
  );
}
