import CloseIcon from "@mui/icons-material/Close";
import sneakers from "../../assets/sneakers.webp";
import "./Cart.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../reducers/product/product";

const Cart = ({ products }) => {
  const dispatch  = useDispatch()

   

   

  return (
    <div className="cart-list-container">
      {products.map((product) => {
        return (
          <div key={product._id} className="row border-top">
            <div className="row main align-items-center">
              <div className="col-2">
                <img className="img-fluid" src={sneakers} />
              </div>
              <div className="col">
                <div className="row text-muted">{product.title}</div>
              </div>
              <div className="col-2">
                <p className="text-black m-0">{product.quantity}</p>
              </div>
              <div className="col text-black">
                ${product.price}{" "}
                <span className="close ms-2">
                  <CloseIcon onClick={() => dispatch(removeFromCart(product))} color="error" />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  products: PropTypes.array,
};
