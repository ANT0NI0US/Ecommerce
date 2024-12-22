import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Services from "./Services";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-light-color text-primary-color-light dark:bg-main-color dark:text-primary-color">
        <Outlet />
        <Services />
      </main>
      <Footer />
    </>
  );
}
