import axios from "axios";

const Axios = axios.create({
  baseURL: "https://hri.dongguk.edu:6006/",
});

export default Axios;
