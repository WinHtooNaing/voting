import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SERVER_URL || "https://voting-nogy.onrender.com",
});

export default api;
