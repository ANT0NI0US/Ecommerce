import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import Shop from "@/features/shop/pages/Shop";
import ProductDetails from "@/features/productDetails/pages/ProductDetails";
import Cart from "@/features/cart/pages/Cart";
import Favourites from "@/features/favourites/pages/Favourites";
import CheckOut from "@/features/checkOut/pages/CheckOut";
import SignUp from "@/features/auth/signUp/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "@/components/UI/loader/Loader";
import PageNotFound from "./PageNotFound";
import useAuth from "@/hooks/useAuth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.config";
import Dashboard from "@/features/admin/dashboard/pages/Dashboard";
import AllUsers from "@/features/admin/allUsers/AllUsers";
import AllProducts from "@/features/admin/allProducts/pages/AllProducts";

const Layout = lazy(() => import("../layout/Layout"));
const AppLayout = lazy(() => import("../layout/admin/AdminLayout"));
const Home = lazy(() => import("../features/home/pages/Home"));
const Login = lazy(() => import("../features/auth/login/Login"));

const Navigations = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const currentUser = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const fetchedUsers = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const result = fetchedUsers.find((user) => user.id === currentUser.uid);
        setUserData(result);
        setLoading(false);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchUsers();
  }, [currentUser]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
        {userData && (
          <>
            {userData.type === "user" && (
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
                <Route
                  path={routes.productdetails}
                  element={<ProductDetails />}
                />
                <Route path={routes.cart} element={<Cart />} />
                <Route path={routes.favourites} element={<Favourites />} />
                <Route path={routes.checkout} element={<CheckOut />} />
              </Route>
            )}

            {userData.type === "admin" && (
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
              </Route>
            )}
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default Navigations;
