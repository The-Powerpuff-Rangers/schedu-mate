import { UserAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedAuth = ({ children }) => {
  const { user } = UserAuth();

  if (user.$id) {
    <Navigate to="/" />;
  }
  return children;
};

export default ProtectedAuth;
