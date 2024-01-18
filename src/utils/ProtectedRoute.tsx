import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isExistUserInfo = !!localStorage.getItem("userInfo");

  return isExistUserInfo ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
