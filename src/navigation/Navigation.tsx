import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Spinner from "@/ui/spinner/Spinner";
import PageNotFound from "./PageNotFound";
import { useSelector } from "react-redux";
import { loginState } from "@/utils/types";
import AuthLayout from "@/layout/AuthLayout";

const Login = lazy(() => import("@/features/auth/Login"));
const SignUp = lazy(() => import("@/features/auth/SignUp"));

// USER
const Home = lazy(() => import("@/features/user/home/pages/Home"));
const Shop = lazy(() => import("@/features/user/shop/pages/Shop"));
const Favorites = lazy(
  () => import("@/features/user/favorites/pages/Favorites"),
);
const Cart = lazy(() => import("@/features/user/cart/pages/Cart"));
const CheckOut = lazy(() => import("@/features/user/checkOut/pages/CheckOut"));
const ProductDetails = lazy(
  () => import("@/features/user/productDetails/pages/ProductDetails"),
);
const Layout = lazy(() => import("@/layout/Layout"));

// ADMIN
const Dashboard = lazy(
  () => import("@/features/admin/dashboard/pages/Dashboard"),
);
const AllProducts = lazy(
  () => import("@/features/admin/allProducts/pages/AllProducts"),
);
const AllUsers = lazy(() => import("@/features/admin/allUsers/pages/AllUsers"));
const Orders = lazy(() => import("@/features/admin/orders/pages/Orders"));

export default function Navigation() {
  const { isAdmin } = useSelector((state: loginState) => state.login);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {!isAdmin ? (
            <>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="checkout" element={<CheckOut />} />
            </>
          ) : (
            <>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="products" element={<AllProducts />} />
              <Route path="orders" element={<Orders />} />
            </>
          )}
        </Route>
      </Routes>
    </Suspense>
  );
}
