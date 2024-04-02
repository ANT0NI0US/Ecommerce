import React, { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const currentUser = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (currentUser === null || currentUser === undefined) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
