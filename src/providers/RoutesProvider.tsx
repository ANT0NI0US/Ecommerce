import { HashRouter } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

const RoutesProvider = ({ children }: Props) => {
  return <HashRouter>{children}</HashRouter>;
};

export default RoutesProvider;
