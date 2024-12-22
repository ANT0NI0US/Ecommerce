interface gridProps {
  children: React.ReactNode;
  Styles?: string;
}

export default function GridContainer({ children, Styles }: gridProps) {
  return (
    <div
      className={`flex flex-col gap-8 xs:grid xs:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] ${Styles}`}
    >
      {children}
    </div>
  );
}
