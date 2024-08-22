import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "@/components/UI/loader/Loader";
import PageNotFound from "./PageNotFound";
import { useSelector } from "react-redux";
import { loginState } from "@/shared/types";
import AuthLayout from "@/layout/AuthLayout";

const Login = lazy(() => import("@/features/auth/Login"));
const SignUp = lazy(() => import("@/features/auth/SignUp"));

//user
const Home = lazy(() => import("@/features/home/pages/Home"));
const Shop = lazy(() => import("@/features/shop/pages/Shop"));
const Favourites = lazy(() => import("@/features/favourites/pages/Favourites"));
const Cart = lazy(() => import("@/features/cart/pages/Cart"));
const CheckOut = lazy(() => import("@/features/checkOut/pages/CheckOut"));
const ProductDetails = lazy(
  () => import("@/features/productDetails/pages/ProductDetails"),
);

const Layout = lazy(() => import("@/layout/Layout"));
const AppLayout = lazy(() => import("@/layout/admin/AdminLayout"));
// admin
const Dashboard = lazy(
  () => import("@/features/admin/dashboard/pages/Dashboard"),
);
const AllProducts = lazy(
  () => import("@/features/admin/allProducts/pages/AllProducts"),
);
const AllUsers = lazy(() => import("@/features/admin/allUsers/pages/AllUsers"));
const Orders = lazy(() => import("@/features/admin/orders/pages/Orders"));

const Navigations = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const { isAdmin } = useSelector((state: loginState) => state.login);
  console.log(isAdmin);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.signup} element={<SignUp />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />

        {!isAdmin && (
          <Route
            element={
              <ProtectedRoute>
                <Layout isTopOfPage={isTopOfPage} />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.shop} element={<Shop />} />
            <Route path={routes.productdetails} element={<ProductDetails />} />
            <Route path={routes.cart} element={<Cart />} />
            <Route path={routes.favourites} element={<Favourites />} />
            <Route path={routes.checkout} element={<CheckOut />} />
          </Route>
        )}

        {isAdmin && (
          <Route
            element={
              <ProtectedRoute>
                <AppLayout isTopOfPage={isTopOfPage} />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path={routes.dashboard} element={<Dashboard />} />
            <Route path={routes.allusers} element={<AllUsers />} />
            <Route path={routes.allProducts} element={<AllProducts />} />
            <Route path={routes.orders} element={<Orders />} />
          </Route>
        )}
      </Routes>
    </Suspense>
  );
};

export default Navigations;
