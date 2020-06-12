import axios from "axios";

const apiInterface = axios.create({
  baseURL: "https://itunes.apple.com"
});

export default apiInterface;
