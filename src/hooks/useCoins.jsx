import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useCoins = (authToken) => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchCoins = async () => {
      if (authToken) {
        try {
          const coinData = await getCoin(authToken);
          if (isMounted) {
            setCoins(coinData);
          }
        } catch (error) {
          console.error("Error fetching coins:", error);
        }
      }
    };

    fetchCoins();

    return () => {
      isMounted = false;
    };
  }, [authToken]);

  return { coins };
};

const getCoin = async (token) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/coin`, {
      headers: {
        Authorization: token,
      },
    });

    return response?.data.data.coin;
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || "Error fetching coin data";
    toast.error(errorMessage, { duration: 2000 });
    throw error; // Re-throwing to allow further handling if needed
  }
};

export default useCoins;
