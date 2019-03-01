import axios from "axios";
import { SERVER_API } from "../constants/config";

export const getRequest = url => {
  let axiosConfig = {
    method: "GET",
    baseURL: SERVER_API + url,
    headers: { "Content-Type": "application/json" }
  };

  return axios(axiosConfig);
};

export const postRequest = (url, data = {}) => {
  let axiosConfig = {
    method: "POST",
    baseURL: SERVER_API + url,
    data: data,
    headers: { "Content-Type": "application/json" }
  };
  return axios(axiosConfig);
};
