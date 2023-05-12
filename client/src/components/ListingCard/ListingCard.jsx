import "./ListingCard.css";
import PropTypes from "prop-types";
import chair from "../../assets/chair.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Link } from "react-router-dom";

const ListingCard = ({ data }) => {


  return (
    <section className="section-products">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="row listing-card-container">
           
      {data.map(data => {
        return <div key={data.title} className="col-md-6 col-lg-4 col-xl-3">
              <div className="single-product">
                <div style={{ background: `url(${chair})` }} className="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <AddShoppingCartIcon />
                      </a>
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
                  <h4 className="product-price">${data?.price.toLocaleString()}</h4>
                </div>
              </div>
            </div>
      })}
            


            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingCard;

ListingCard.propTypes = {
  data: PropTypes.array,
};
