import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./container/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";
import AddProduct from "./pages/Product/AddProduct/AddProduct";
import UserProfile from "./pages/UserProfile/UserProfile";
import SingleProduct from "./pages/Product/SingleProduct/SingleProduct";
import Shop from "./pages/Shop/Shop";
import ManageProduct from "./pages/Product/ManageProduct/ManageProduct";

function App() {
  return (
    <Layout>

     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/shop" element={<Shop />} />
      <Route exact path="auth/login" element={<Login />} />
      <Route eaxct path="auth/signup" element={<SignUp />} />
      <Route path="/product/add" element={<AddProduct />}/>
      <Route path="/product/:id" element={<SingleProduct />}/>
      <Route path="/product/manage" element={<ManageProduct />}/>

     </Routes>
     
    </Layout>
  );
}

export default App;
