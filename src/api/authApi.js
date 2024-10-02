import axios from "axios";
import { handleError } from "../error/errorHandler";

const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Function to register a user
export const usersRegisterApi = async (userData) => {
  try {
    const response = await publicAxios.post("/user/register", userData);
    return response?.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to login a user
export const usersLoginApi = async (email) => {
  try {
    const response = await publicAxios.post("/user/login", email);

    return response?.data;
  } catch (error) {
    handleError(error);
  }
};
