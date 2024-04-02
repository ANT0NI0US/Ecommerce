import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface Props {
  isTopOfPage: boolean;
}

const Layout = ({ isTopOfPage }: Props) => {
  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
