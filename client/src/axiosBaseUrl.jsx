import axios from "axios";

const instance = axios.create({
  baseURL: "https://openfabric.adaptable.app/openfabric",
});

export default instance;

// https://openfabric.adaptable.app/openfabric