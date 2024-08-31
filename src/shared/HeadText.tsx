interface Props {
  children: React.ReactNode;
}

const HeadText = ({ children }: Props) => {
  return (
    <div className="text-primary-color-light mb-10 text-center text-3xl font-bold dark:text-primary-color">
      {children}
    </div>
  );
};

export default HeadText;
