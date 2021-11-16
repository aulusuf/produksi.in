import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getManajemenContent = () => {
  return axios.get(API_URL + "manajemen", {
    headers: { "Content-Type": authHeader() },
  });
};

const getSupervisorContent = () => {
  return axios.get(API_URL + "supervisor", {
    headers: { "Content-Type": authHeader() },
  });
};
const getTimProduksiContent = () => {
  return axios.get(API_URL + "tim_produksi", {
    headers: { "Content-Type": authHeader() },
  });
};

const userService = {
  getPublicContent,
  getManajemenContent,
  getSupervisorContent,
  getTimProduksiContent,
};

export default userService;
