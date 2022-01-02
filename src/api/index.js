import axios from "axios";

const Axios = axios.create({
  baseURL: "http://210.94.194.146:8080",
});

export default Axios;
