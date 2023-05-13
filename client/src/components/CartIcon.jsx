import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState } from "react";
import SideCartMenu from "./SideCartMenu/SideCartMenu";
import { useSelector } from "react-redux";
import { cart } from "../reducers/product/product";

const CartIcon = () => {
  const [open, setOpen] = useState(false);

  const itemsNumber = useSelector(cart);

  const customStyle = {
    height: "20px",
    width: "20px",
    lineHeight: "18px",
    borderRadius: "50px",
    fontSize: "14px",
    display: "inline-flex",
    justifyontent: "center",
    alignItems: "center",
    marginLeft: "5px",
    color: "white",
    position: "absolute",
    left: "22px",
    top: "-4px",
    fontWeight: "600",
    zIndex: 30,
  };
  return (
    <>
      <div
        style={{ cursor: "pointer", position: "relative" }}
        onClick={() => setOpen(true)}
      >
        <ShoppingBagOutlinedIcon sx={{ color: "white", fontSize: 25 }} />
        <span style={customStyle} className="cart-count t">
          {itemsNumber.length}
        </span>
      </div>
      <SideCartMenu open={open} close={() => setOpen(false)} />
    </>
  );
};

export default CartIcon;
