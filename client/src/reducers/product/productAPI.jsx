import Axios from "../../axiosBaseUrl";

const config = {
  header: {
    "Content-Type": "application/json",
  },
};

export const addProduct = async (userInput) => {
  const { name, price, description } = userInput;
  return Axios.post("/product/create", { name, price, description }, config);
};




