import "./SingleProduct.css";
import chair from "../../../assets/chair.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="single-product-container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={chair} />
        </div>
        <div className="col-12 col-lg-6">
          <h3 className="single-product-title">White Wall Clock</h3>
          <p className="price">$250</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
            magnis dis parturient montes nascetur ridiculus mus. Vestibulum
            ultricies aliquam convallis.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="quantity quantity-buttons">
              <p>Quantity</p>
              <div className="quantity-btn">
                <div  onClick={() => setQuantity(quantity - 1)}>
                  <RemoveIcon />
                </div>
                <input type="number" value={quantity} />

                <div onClick={() => setQuantity(quantity + 1)}>
                  <AddIcon />
                </div>
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
