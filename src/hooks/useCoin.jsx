import { handleError } from "../error/errorHandler";
import useAuth from "./useAuth";
import useSecureAxios from "./useAxiosSecure";
import { useEffect, useState } from "react";

const useCoin = () => {
  const secureAxios = useSecureAxios();
  const { user } = useAuth();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      if (!user) return;
      try {
        const response = await secureAxios.get("/coin");
        setCoins(response?.data.data.coin);
        setLoading(false);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [user, secureAxios]);

  //   Default 50 coin
  const addCoin = async () => {
    try {
      const response = await secureAxios.post("/coin");
      console.log("Default 50 coin added", response?.data.data);
    } catch (error) {
      handleError(error);
    }
  };

  return { coins, loading, addCoin };
};

export default useCoin;
