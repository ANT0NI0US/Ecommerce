import Navigations from "@/navigations/Navigations";
import RoutesProvider from "./RoutesProvider";
import StoreProvider from "./StoreProvider";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppProvider = () => {
  return (
    <StoreProvider>
      <RoutesProvider>
        <Navigations />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          closeOnClick
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </RoutesProvider>
    </StoreProvider>
  );
};

export default AppProvider;
