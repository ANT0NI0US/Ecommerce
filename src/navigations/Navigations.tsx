import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import routes from "./routes";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "@/components/UI/loader/Loader";
import PageNotFound from "./PageNotFound";
import useAuth from "@/hooks/useAuth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.config";
import { userProps } from "@/shared/types";

const Layout = lazy(() => import("../layout/Layout"));
const AppLayout = lazy(() => import("../layout/admin/AdminLayout"));
const Login = lazy(() => import("../features/auth/login/Login"));
const SignUp = lazy(() => import("@/features/auth/signUp/SignUp"));

//user
const Home = lazy(() => import("../features/home/pages/Home"));
const Shop = lazy(() => import("@/features/shop/pages/Shop"));
const Favourites = lazy(() => import("@/features/favourites/pages/Favourites"));
const Cart = lazy(() => import("@/features/cart/pages/Cart"));
const CheckOut = lazy(() => import("@/features/checkOut/pages/CheckOut"));
const ProductDetails = lazy(
  () => import("@/features/productDetails/pages/ProductDetails"),
);

// admin
const Dashboard = lazy(
  () => import("@/features/admin/dashboard/pages/Dashboard"),
);
const AllProducts = lazy(
  () => import("@/features/admin/allProducts/pages/AllProducts"),
);
const AllUsers = lazy(() => import("@/features/admin/allUsers/pages/AllUsers"));
const Orders = lazy(() => import("@/features/admin/orders/pages/Orders"));

interface CurrentUser {
  uid: string;
}

const Navigations = () => {
  const navigate = useNavigate();
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const currentUser = useAuth() as CurrentUser;
  const [userData, setUserData] = useState<userProps | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        })) as userProps[];
        const result = fetchedUsers.find(
          (user) => user.id === currentUser?.uid,
        );
        setUserData(result);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    };
    fetchUsers();
  }, [currentUser]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentPath = window.location.hash;
    console.log(currentPath);
    if (!token && currentPath !== "#/signup") {
      navigate("/login");
    }
  }, [navigate]);

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
            {userData?.type === "user" && (
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
                <Route path={routes.orders} element={<Orders />} />
              </Route>
            )}
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default Navigations;
