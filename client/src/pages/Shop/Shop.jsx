import { useEffect, useState } from "react";
import "./Shop.css"
import Axios from "../../axiosBaseUrl";
import { useNavigate } from "react-router-dom";
import ListingCard from "../../components/ListingCard/ListingCard";
import Spinner from "../../components/Spinner";



const Shop = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const { data } = await Axios.get("/product/all");

        setProducts(data.products);
      } catch (error) {
        alert(error);
        navigate("/");
      }
    };

    getAllProduct();
  }, [navigate]);

  if(!products) return <Spinner />

  return (
    <div className="shop-page">
      <ListingCard data={products} />
    </div>
  );
};

export default Shop;
