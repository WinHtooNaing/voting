import axios from "axios";

const api = axios.create({
  baseURL: "https://voting-nogy.onrender.com", // your Express API
});

export default api;
