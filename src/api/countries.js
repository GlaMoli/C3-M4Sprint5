import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getCountries = async () => {
  const res = await axios.get(`${API_URL}/countries`);
  return res.data;
};
