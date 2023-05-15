import Axios from "../../axiosBaseUrl"

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
   
  const { email, password } = userInput;

  return Axios.post("/auth/register",
    {email, password },
    config
  );
};


export const forgotPassword = (userInput) => {

  return Axios.post("/auth/forgotpassword",
    {email: userInput},
    config
  );
};





