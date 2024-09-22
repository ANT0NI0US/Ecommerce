interface gridProps {
  children: React.ReactNode;
}

export default function GridContainer({ children }: gridProps) {
  return (
    <div className="flex flex-col gap-8 xs:grid xs:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
      {children}
    </div>
  );
}
