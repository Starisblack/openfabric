import "./SingleProduct.css";
import chair from "../../../assets/chair.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Axios from "../../../axiosBaseUrl"
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, quantity, removeQuantity } from "../../../reducers/product/product";

const SingleProduct = () => {

  const {id} = useParams()

 const value = useSelector(quantity)

 const dispatch = useDispatch()
  // const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({})
  const navigate = useNavigate()


  useEffect(()=>{
    const getProduct =async () => {

      try {
       const {data} = await Axios.get("/product/" + id)

        setProduct(data.product)
      } catch (error) {
         alert(error)
         navigate("/")
      }
    }

    getProduct()

       
  }, [id, navigate])

 if(!product) return <h1>Loading</h1>

  return (
    <div className="single-product-container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={chair} />
        </div>
        <div className="col-12 col-lg-6">
          <h3 className="single-product-title">{product?.title}</h3>
          <p className="price">${product.price?.toLocaleString()}</p>
          <p className="description">
            {product.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="quantity quantity-buttons">
              <p>Quantity</p>
              <div className="quantity-btn">
                <button disabled={value === 0}  onClick={() => dispatch(removeQuantity())}>
                  <RemoveIcon />
                </button>
                <input type="number" value={value || 0} />

                <button onClick={() => dispatch(addQuantity())}>
                  <AddIcon />
                </button>
              </div>
            </div>

            <button type="submit" className="add-to-cart-btn">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
