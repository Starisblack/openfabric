import axios from "axios";

const instance = axios.create({
  baseURL: "https://openfabric.adaptable.app/openfrabic",
});

export default instance;
