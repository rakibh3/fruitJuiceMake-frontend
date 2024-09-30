export const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 200
    console.error("Server Error:", error.response.data);
    console.error("Status Code:", error.response.status);
    return error.response.data || "An error occurred. Please try again.";
  } else if (error.request) {
    // Request was made but no response received
    console.error("No Response:", error.request);
    return "No response received from the server.";
  } else {
    // Something else happened
    console.error("Error", error.message);
    return error.message;
  }
};
