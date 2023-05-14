import { useEffect, useState } from "react";
import "./FeatureProducts.css"
import { useNavigate } from "react-router-dom";
import Axios from "../../axiosBaseUrl"
import Spinner from "../Spinner";
import ListingCard from "../ListingCard/ListingCard";

const FeatureProducts = () => {

  const [products, setProducts] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const { data } = await Axios.get("/product/all");

        setProducts(data.products.slice(0, 6));
      } catch (error) {
       console.log(error)
        navigate("/");
      }
    };

    getAllProduct();
  }, [navigate]);

  if(!products) return <Spinner />


  return (
    <div className="feature-product-container">
     <h1>Popular Products</h1>
      
      <ListingCard data={products}/>
    </div>
  )
}

export default FeatureProducts