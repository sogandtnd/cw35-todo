import axios from "axios";
export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const instance = axios.create({ baseURL: BASE_URL, timeout: 80000 });
