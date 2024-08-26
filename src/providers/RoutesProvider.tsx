import { BrowserRouter } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

const RoutesProvider = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RoutesProvider;
