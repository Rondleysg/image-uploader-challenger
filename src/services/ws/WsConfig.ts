import axios from "axios";

const http = axios.create({
    baseURL: "https://unsplash-yi42.onrender.com/",
});

export default http;
