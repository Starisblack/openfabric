import Axios from "../axiosBaseUrl"

const config = {
  header: {
    "Content-Type": "application/json",
  },
};

export const userLogin = (userInput) => {
  const { email, password } = userInput;
  return Axios.post("/auth/login",
    { email, password },
    config
  );
};

export const signUpUser = (userInput) => {
   
  const { username, email, password } = userInput;

  return Axios.post("/auth/register",
    { username, email, password },
    config
  );
};




export const logOut = () => {
  return Axios.get("/auth/logout");
};




