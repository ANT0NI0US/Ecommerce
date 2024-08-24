interface Props {
  children: React.ReactNode;
}

const HeadText = ({ children }: Props) => {
  return <div className="text-3xl font-bold">{children}</div>;
};

export default HeadText;
