import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./container/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";

function App() {
  return (
    <Layout>

     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="auth/login" element={<Login />} />
     </Routes>
     
    </Layout>
  );
}

export default App;
