interface helmetProps {
  title: string;
  children: React.ReactNode;
}

const Helmet = ({ title, children }: helmetProps) => {
  document.title = `Storeify - ${title}`;
  return <div className="w-full">{children}</div>;
};

export default Helmet;
