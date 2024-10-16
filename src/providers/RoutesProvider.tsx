import { BrowserRouter } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

export default function RoutesProvider({ children }: Props) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
