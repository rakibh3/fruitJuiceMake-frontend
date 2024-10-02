import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useCoins = () => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchCoins = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        toast.error("Access token is missing. Please log in.");
        return;
      }

      try {
        const coinData = await getCoin(token);
        if (isMounted) {
          setCoins(coinData);
        }
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();

    return () => {
      isMounted = false;
    };
  }, []);

  return { coins };
};

const getCoin = async (token) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/coins`, {
      headers: {
        Authorization: token,
      },
    });

    return response?.data?.data?.coin;
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || "Error fetching coin data";
    toast.error(errorMessage, { duration: 2000 });
    throw error;
  }
};

export default useCoins;
