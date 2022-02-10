import axios from "axios";
import URL from "./url";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: URL,

  headers: {
    "content-type": "application/json",
    Accept: "/",
  },
});

const API = {
  getData: async function (link, data = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: "GET",
        url: link,
        data: data,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve({ status: "error", result: error.message });
        });
    });
  },
};
export default API;
