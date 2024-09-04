import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
