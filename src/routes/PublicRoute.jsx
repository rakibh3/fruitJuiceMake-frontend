import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PageLoader from "../components/PageLoader/PageLoader";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <PageLoader />;

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default PublicRoute;
