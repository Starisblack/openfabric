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
import Checkout from "./pages/Product/Checkout/Checkout";
import { useEffect } from "react";
import Axios from "./axiosBaseUrl"
import { useDispatch } from "react-redux";
import { setProducts } from "./reducers/product/product";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";

function App() {


  const dispatch = useDispatch()

  

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const { data } = await Axios.get("/product/all");
           dispatch(setProducts(data.products))
      } catch (error) {
       console.log(error)
      }
    };

    getAllProduct();
  }, [dispatch]);



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
      <Route path="/product/checkout" element={<Checkout />}/>
      <Route path="/forgotpassword" element={<ForgotPassword />}/>
      <Route path="/passwordreset/:token" element={<ResetPassword />}/>
      

     </Routes>
     
    </Layout>
  );
}

export default App;
