import { Outlet } from "react-router-dom";
import AdminNavbar from "./navbar/AdminNavbar";
import Footer from "../footer/Footer";

interface Props {
  isTopOfPage: boolean;
}

const AdminLayout = ({ isTopOfPage }: Props) => {
  return (
    <div className="app bg-gray-20">
      <AdminNavbar isTopOfPage={isTopOfPage} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLayout;
