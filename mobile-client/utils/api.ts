import axios from "axios";

const api = axios.create({
  baseURL: "https://voting-nogy.onrender.com", // Use your API URL directly
  // You can add headers or other config here if needed
});

export default api;
