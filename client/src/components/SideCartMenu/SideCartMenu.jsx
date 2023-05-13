import { Link } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import "./SideCartMenu.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cart } from "../../reducers/product/product";
import Cart from "../Cart/Cart";

const SideCartMenu = ({ open, close }) => {
  const itemsInCart = useSelector(cart);
  const totalAmt = itemsInCart.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);

  return (
    <>
      <Backdrop show={open} clicked={close} />
      {open && (
        <div
          className="mobile-slider"
          style={{
            opacity: "1",
            visibility: "inherit",
            transform: "translate(0px, 0px)",
          }}
        >
          <div className="mobile-slider-top">
            Your Basket (
            <span className="cart-count t">{itemsInCart.length}</span>)
            <span className="close-menu" onClick={close}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          </div>
          <div className="cart-overlay cart-block">
            <span className="cart-total"></span>
            {itemsInCart.length <= 0  && <span className="emptycart">
              <svg
                width="150"
                height="150"
                viewBox="0 0 1314 1288"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M649.5 1133C649.5 1189.33 603.833 1235 547.5 1235C491.167 1235 445.5 1189.33 445.5 1133C445.5 1076.67 491.167 1031 547.5 1031C603.833 1031 649.5 1076.67 649.5 1133Z"
                  stroke="#EEEEEE"
                  strokeWidth="60"
                ></path>
                <path
                  d="M1095 1133.5C1095 1189.83 1049.33 1235.5 993 1235.5C936.667 1235.5 891 1189.83 891 1133.5C891 1077.17 936.667 1031.5 993 1031.5C1049.33 1031.5 1095 1077.17 1095 1133.5Z"
                  stroke="#EEEEEE"
                  strokeWidth="60"
                ></path>
                <path
                  d="M52 106.5H167C193.667 106.5 252.2 121.3 273 180.5C273 180.5 290.5 228.5 295 250M458.5 738.5C435.667 761.5 402.315 793.994 423.5 855.5C439 900.5 498 924.5 535 924.5L1082.5 921.5M458.5 738.5L1072.5 675.5C1126 668 1171 626 1191.5 530L1249.5 284H961H865.75M458.5 738.5C458.5 738.5 358.851 440.771 295 250M924 51L770.5 284L227 1133.5M295 250C442 296.5 662 284 662 284"
                  stroke="#EEEEEE"
                  strokeWidth="60"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              <Link onClick={close} className="btn" to="/shop">
                Return to Shop
              </Link>
            </span>}

            <div className="hamburger-group">
              <div className="hamburger-minicart">
                <div className="minicart">
                  <div className="shopping-cart-content">
                    {itemsInCart.length >= 1 ? (
                      <>
                        <Cart products={itemsInCart}/>
                        <div className="minicart-button-holder">
                          <p className="product-total">
                            <strong style={{ float: "left" }}>Subtotal:</strong>{" "}
                            <span className="Price-amount amount">
                              <span className="currencySymbol">$</span>
                              {totalAmt}
                            </span>{" "}
                          </p>
                          <p className="mini-cart-buttons buttons">
                            <Link
                              onClick={close}
                              to="/product/checkout"
                              className="button"
                            >
                              <span>View cart</span>
                            </Link>
                            <Link className="button checkout">
                              <span>Checkout</span>
                            </Link>
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="no-product-text text-center mt-2">
                        No Product in Your Cart.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cleafix"></div>
        </div>
      )}
    </>
  );
};

export default SideCartMenu;

SideCartMenu.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};
