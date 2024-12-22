import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";
import Spinner from "@/ui/spinner/Spinner";
import AuthLayout from "@/layout/AuthLayout";
import AppLayout from "@/layout/AppLayout";

const HomeLayout = lazy(() => import("@/layout/HomeLayout"));
const Login = lazy(() => import("@/features/auth/Login"));
const SignUp = lazy(() => import("@/features/auth/SignUp"));

// USER
const Home = lazy(() => import("@/features/home/pages/Home"));
const Shop = lazy(() => import("@/features/shop/pages/Shop"));
const ProductDetails = lazy(
  () => import("@/features/productDetails/pages/ProductDetails"),
);
const Orders = lazy(() => import("@/features/orders/pages/Orders"));
const About = lazy(() => import("@/features/about/page/About"));
const Contact = lazy(() => import("@/features/Contact/page/Contact"));
const Favorites = lazy(() => import("@/features/favorites/pages/Favorites"));
const Cart = lazy(() => import("@/features/cart/pages/Cart"));
const CheckOut = lazy(() => import("@/features/checkOut/pages/CheckOut"));

export default function Navigation() {
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
              <HomeLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="orders" element={<Orders />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
