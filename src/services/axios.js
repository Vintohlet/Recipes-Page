import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://api.spoonacular.com",
    headers: {
        "Content-Type": "application/json",
      }
})