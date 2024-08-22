import { BrowserRouter, HashRouter } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

// const RoutesProvider = ({ children }: Props) => {
//   return <HashRouter>{children}</HashRouter>;
// };

const RoutesProvider = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RoutesProvider;
