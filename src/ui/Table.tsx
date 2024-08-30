import React, { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

interface HeaderProps {
  children: ReactNode;
}

interface BodyProps<T> {
  data: T[];
  render: (item: T, index: number) => ReactNode;
}

interface RowProps {
  children: ReactNode;
}

interface CellProps {
  children: ReactNode;
  isHeader?: boolean;
}

const Table: React.FC<TableProps> & {
  Header: React.FC<HeaderProps>;
  Body: <T>(props: BodyProps<T>) => JSX.Element;
  Row: React.FC<RowProps>;
  Cell: React.FC<CellProps>;
} = ({ children }) => {
  return (
    <div className="overflow-x-auto rounded-tl-[12px] rounded-tr-[12px] shadow-lg shadow-secondary-color drop-shadow-2xl">
      <table className="w-full p-[10px] text-center text-sm">{children}</table>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <thead className="bg-secondary-color text-xs uppercase">
      <tr>{children}</tr>
    </thead>
  );
};

const Body = <T,>({ data, render }: BodyProps<T>): JSX.Element => {
  return <tbody>{data.map(render)}</tbody>;
};

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <tr className="border-b-[0.5px] border-secondary-color bg-main-color/90">
      {children}
    </tr>
  );
};

const Cell: React.FC<CellProps> = ({ children, isHeader = false }) => {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag scope={isHeader ? "col" : "row"} className="px-6 py-4">
      {children}
    </Tag>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
