import axios from "axios";

const instance = axios.create({

  baseURL: "http://172.20.10.3:8000/api/v1/",

});

export default instance;
