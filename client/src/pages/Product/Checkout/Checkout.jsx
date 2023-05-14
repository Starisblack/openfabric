import "./Checkout.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { cart, removeFromCart } from "../../../reducers/product/product";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Checkout = () => {
  const itemsInCart = useSelector(cart);
  const dispatch = useDispatch();
  const productsPrice = itemsInCart
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
  const shippingFee = 10;
  const totalAmt = productsPrice + shippingFee;


  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <div className="page px-4 px-lg-0  checkout-container">
        
       {itemsInCart.length >= 1 ? <div className="pb-5">
          <div className="container">
            <div className="row">

              <div className="col-lg-12 p-md-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemsInCart.map((item) => {
                        return (
                          <tr key={item._id}>
                            <th scope="row" className="border-0">
                              <div className="p-2">
                                <img
                                  src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                                  alt=""
                                  width="70"
                                  className="img-fluid rounded shadow-sm checkout-img"
                                />
                                <div className="ms-3 d-inline-block align-middle">
                                  <h5 className="mb-0">
                                    {" "}
                                    <a
                                      href="#"
                                      className="text-dark d-inline-block align-middle"
                                    >
                                      {item?.title}
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </th>

                            <td className="border-0 align-middle">
                              <strong>
                                ${item?.price * item?.quantity}
                              </strong>
                            </td>
                            <td className="border-0 align-middle">
                              <strong>{item?.quantity}</strong>
                            </td>
                            <td className="border-0 align-middle">
                              <DeleteIcon
                                className="del-icon"
                                onClick={() => dispatch(removeFromCart(item))}
                                color="error"
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">

                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Instructions for seller
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    If you have some information for the seller you can leave
                    them in the box below
                  </p>
                  <textarea
                    name=""
                    cols="30"
                    rows="2"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Order summary{" "}
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Order Subtotal </strong>

                      <strong>${productsPrice}</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">
                        Shipping and handling
                      </strong>
                      <strong>${shippingFee}</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Tax</strong>
                      <strong>$0.00</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">${totalAmt}</h5>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-dark rounded-pill py-2 btn-block"
                  >
                    Procceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> : <div style={{height: "60vh", flexDirection: "column", textAlign: "center"}}  className="d-flex justify-content-center"> <h1>You have no Products in the Cart</h1>
            <Link to="/shop" className="go-shopping-btn my-3">GO SHOPPING</Link>
        </div>}

      </div>
    </div>
  );
};

export default Checkout;
