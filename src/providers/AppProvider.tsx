import Navigation from "@/navigation/Navigation";
import RoutesProvider from "./RoutesProvider";
import StoreProvider from "./StoreProvider";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import DarkModeButton from "@/ui/DarkModeButton";

export default function AppProvider() {
  return (
    <StoreProvider>
      <RoutesProvider>
        <Navigation />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          closeOnClick
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </RoutesProvider>
      <DarkModeButton />
    </StoreProvider>
  );
}
