import Navigations from "@/navigations/Navigations";
import RoutesProvider from "./RoutesProvider";
import StoreProvider from "./StoreProvider";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
// import ScrollToTopButtons from "@/ui/ScrollToTopButtons";

export default function AppProvider() {
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
      {/* <ScrollToTopButtons /> */}
    </StoreProvider>
  );
}
