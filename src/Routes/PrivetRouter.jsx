import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../component/pages/Loading";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext); // Renamed `Loading` to `loading` for clarity

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/auth/login" />;
};

export default PrivetRouter;
