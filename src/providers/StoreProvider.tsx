import store from "@/store";
import { Provider } from "react-redux";
interface Props {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
