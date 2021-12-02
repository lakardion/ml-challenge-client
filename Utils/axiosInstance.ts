import axios from "axios";
const apiUri = process.env.NEXT_PUBLIC_API_BASE_URL;
const axiosInstance = axios.create({
  baseURL: apiUri,
});

export default axiosInstance;
