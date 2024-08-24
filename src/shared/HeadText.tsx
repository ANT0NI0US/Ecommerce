interface Props {
  children: React.ReactNode;
}

const HeadText = ({ children }: Props) => {
  return <div className="mb-10 text-center text-3xl font-bold">{children}</div>;
};

export default HeadText;
