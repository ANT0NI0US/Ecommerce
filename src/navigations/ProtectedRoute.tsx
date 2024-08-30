import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginState } from "@/shared/types";
import Spinner from "@/ui/spinner/Spinner";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useSelector(
    (state: loginState) => state.login,
  );

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
