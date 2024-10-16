import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "@/ui/spinner/Spinner";
import { loginState } from "@/utils/types";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useSelector(
    (state: loginState) => state.login,
  );

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}
