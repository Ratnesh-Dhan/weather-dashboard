import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
});

export default axiosConfig;