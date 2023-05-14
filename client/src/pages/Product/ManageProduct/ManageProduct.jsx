import { useEffect, useState } from "react";
import "./ManageProduct.css";
import { useSelector } from "react-redux";
import { products } from "../../../reducers/product/product";
import { authToken, user } from "../../../reducers/auth/authReducers";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import sneakers from "../../../assets/sneakers.webp";
import FormDialog from "../../../components/popUpForm";
import EditProductForm from "./EditProductForm/EditProductForm";
import Axios from "../../../axiosBaseUrl";
import ConfirmationDialog from "../../../components/ConfirmationDialog/ConfirmationDialog";

const ManageProduct = () => {
  const userProducts = useSelector(products);
  const currentUser = useSelector(user);
  const token = useSelector(authToken);
  const navigate = useNavigate();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!currentUser) {
      navigate("/auth/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) return <Spinner />;

  const handleClose = () => {
    setShowUpdateForm(false);
  };

  const updateHandler = (data) => {
    setSelectedProduct(data);
    setShowUpdateForm(true);
  };

  const deleteHandler = (data) => {
    setSelectedProduct(data);
    setOpenAlert(true);
  };

  const closeAlert = () => {
    setOpenAlert(false);
  };

  const yesHandler = async () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await Axios.post("/product/delete", { id: selectedProduct._id }, config);
      setLoading(false);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <ConfirmationDialog
        title="Do you want to delete this product?"
        openAlert={openAlert}
        closeAlert={closeAlert}
        yesHandler={yesHandler}
        loading={loading}
      />

      <FormDialog open={showUpdateForm}>
        <EditProductForm data={selectedProduct} handleClose={handleClose} />
      </FormDialog>
      {userProducts.length >= 1 ? (
        <div>
          <h1 className="text-center">Manage Your Products</h1>
          <div className="container py-3">
            <div className="col-xs-12 col-md-12 bootstrap snippets bootdeys">
              <div className="product-content product-wrap clearfix">
                <div className="row g-4 justify-content-start mt-4 user-product-list">
                  {userProducts
                    .filter((item) => item.createdBy === currentUser._id)
                    .map((product) => {
                      return (
                        <div key={product._id} className="col-12 col-lg-5 m-2">
                          <div className="row h-100 g-4">
                            <div
                              style={{ background: `url(${sneakers})` }}
                              className="product-image col-4"
                            ></div>

                            <div className="col-8 product-detail-container p-3">
                              <div className="product-detail">
                                <h5>
                                  <Link
                                    className="text-black"
                                    to={"/product/" + product._id}
                                  >
                                    {product.title}
                                  </Link>
                                </h5>
                                <p className="price-container">
                                  <span>${product.price}</span>
                                </p>
                                <span className="tag1"></span>
                              </div>
                              <div className="description">
                                <p>
                                  {product.description.length >= 40
                                    ? product.description.substring(0, 40) +
                                      "..."
                                    : product.description}
                                </p>
                              </div>
                              <div className="product-info smart-form">
                                <div className="row">
                                  <div className="col-12">
                                    <button
                                      onClick={() => updateHandler(product)}
                                      className="btn btn-success mx-2"
                                    >
                                      Edit
                                    </button>
                                    <button
                                      onClick={() => deleteHandler(product)}
                                      className="btn btn-danger mx-2"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center vh-100 d-flex flex-column justify-content-center">
          <h1 >You have no products</h1>

          <Link to="/product/add" className="btn btn-lg btn-dark mx-auto mt-3">Add Product</Link>
        </div>

      )}
    </div>
  );
};

ManageProduct.propTypes = {};

export default ManageProduct;
