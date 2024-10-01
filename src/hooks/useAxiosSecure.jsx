import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const secureAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useSecureAxios = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Add a request interceptor to axiosSecure for secure api calls
  secureAxios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("accessToken");
      config.headers.authorization = token;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Interceptor for handling the response 401 and 403
  secureAxios.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("secureAxios", status);
      if (status === 401 || status === 403) {
        await logout();
        navigate("/");
      }
      return Promise.reject(error);
    },
  );

  return secureAxios;
};
export default useSecureAxios;
