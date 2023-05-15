import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/openfabric",
});

export default instance;

// https://openfabric.adaptable.app/openfabric