import axios from "axios";
export const Base_URL = "https://jsonplaceholder.typicode.com";

export const instance = axios.create({ Base_URL, timeout: 8000 });
