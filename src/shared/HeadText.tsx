interface Props {
  children: React.ReactNode;
}

const HeadText = ({ children }: Props) => {
  return <div className="text-3xl font-bold text-primary-color">{children}</div>;
};

export default HeadText;
