import "./ListingCard.css";
import PropTypes from "prop-types";
import chair from "../../assets/chair.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/product/product";

const ListingCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <section className="section-products">
     
        <div className="text-center">
          <div className="listing-card-container">
            {data.map((data) => {
              return (
                <div key={data.title}>
                  <div className="single-product">
                    <div
                      style={{ background: `url(${chair})`, backgroundSize: "cover" }}
                      className="part-1"
                    >
                      <ul>
                        <li>
                          <Link
                            onClick={() => dispatch(addToCart(data))}
                            href="#"
                          >
                            <AddShoppingCartIcon />
                          </Link>
                        </li>

                        <li>
                          <Link to={"/product/" + data._id}>
                            <OpenInNewOutlinedIcon />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2 text-start">
                      <h3 className="product-title">{data.title}</h3>
                      <h4 className="product-price">
                        ${data?.price.toLocaleString()}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default ListingCard;

ListingCard.propTypes = {
  data: PropTypes.array,
};
