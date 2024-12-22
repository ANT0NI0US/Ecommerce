import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-light-color text-primary-color-light dark:bg-main-color dark:text-primary-color">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
